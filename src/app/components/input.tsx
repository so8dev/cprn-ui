import { Link } from "expo-router";
import { Eye, EyeOff, Search } from "lucide-react-native";
import React from "react";
import { ComponentExample } from "@/components/component/ComponentExample";
import { Button } from "@/components/ui/Button/Button";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Divider } from "@/components/ui/Divider/Divider";
import { Input } from "@/components/ui/Input/Input";
import { Radio } from "@/components/ui/Radio/Radio";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";

export default function InputScreen() {
	const [passwordVisible, setPasswordVisible] = React.useState(false);

	const [size, setSize] = React.useState<"sm" | "md" | "lg">("md");
	const [states, setStates] = React.useState({
		isError: false,
		isDisabled: false,
		isReadOnly: false,
	});
	const statesArray = Object.entries(states)
		.filter(([, value]) => value)
		.map(([key]) => key);
	const { isError, isDisabled, isReadOnly } = states;

	return (
		<ComponentExample component="Input">
			<ComponentExample.Section title="Text Inputs">
				<VStack flex={1} gap={4}>
					<VStack gap={4} justify="center" style={tw`h-64`}>
						<Input
							variant="outlined"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.TextField placeholder="Outlined Input" />
						</Input>
						<Input
							variant="underlined"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.TextField placeholder="Underlined Input" />
						</Input>
						<Input
							variant="filled"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.TextField placeholder="Filled Input" />
						</Input>
						<Input
							variant="ghost"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.TextField placeholder="Ghost Input" />
						</Input>
					</VStack>
					<Divider />
					<VStack flex={1} gap={4}>
						<Checkbox.Group
							value={statesArray}
							onChange={(values) => {
								setStates({
									isError: values.includes("isError"),
									isDisabled: values.includes("isDisabled"),
									isReadOnly: values.includes("isReadOnly"),
								});
							}}
							horizontal
						>
							<Checkbox value="isError" label="isError" />
							<Checkbox value="isDisabled" label="isDisabled" />
							<Checkbox value="isReadOnly" label="isReadOnly" />
						</Checkbox.Group>
						{/* @ts-ignore */}
						<Radio.Group value={size} onChange={setSize} horizontal>
							<Radio value="sm" label="Small" />
							<Radio value="md" label="Medium" />
							<Radio value="lg" label="Large" />
						</Radio.Group>
					</VStack>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Number Inputs">
				<VStack flex={1} gap={4}>
					<VStack gap={4} justify="center" style={tw`h-64`}>
						<Input
							variant="outlined"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.NumberField placeholder="Outlined Input" />
						</Input>
						<Input
							variant="underlined"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.NumberField placeholder="Underlined Input" />
						</Input>
						<Input
							variant="filled"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.NumberField placeholder="Filled Input" />
						</Input>
						<Input
							variant="ghost"
							size={size}
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							<Input.NumberField placeholder="Ghost Input" />
						</Input>
					</VStack>
					<Divider />
					<VStack flex={1} gap={4}>
						<Checkbox.Group
							value={statesArray}
							onChange={(values) => {
								setStates({
									isError: values.includes("isError"),
									isDisabled: values.includes("isDisabled"),
									isReadOnly: values.includes("isReadOnly"),
								});
							}}
							horizontal
						>
							<Checkbox value="isError" label="isError" />
							<Checkbox value="isDisabled" label="isDisabled" />
							<Checkbox value="isReadOnly" label="isReadOnly" />
						</Checkbox.Group>
						{/* @ts-ignore */}
						<Radio.Group value={size} onChange={setSize} horizontal>
							<Radio value="sm" label="Small" />
							<Radio value="md" label="Medium" />
							<Radio value="lg" label="Large" />
						</Radio.Group>
					</VStack>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="With Slots">
				<VStack gap={4}>
					<Input variant="outlined">
						<Input.Slot>
							<Input.Icon as={Search} />
						</Input.Slot>
						<Input.TextField placeholder="Search..." />
					</Input>
					<Input variant="outlined">
						<Input.TextField secureTextEntry={!passwordVisible} />
						<Input.Slot
							onPress={() => {
								setPasswordVisible((prev) => !prev);
							}}
						>
							<Input.Icon as={passwordVisible ? EyeOff : Eye} />
						</Input.Slot>
					</Input>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="With Form Control">
				<Link href="/components/form-control" asChild>
					<Button variant="contained" action="tertiary">
						<Button.Text>Go to Form Control</Button.Text>
					</Button>
				</Link>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
