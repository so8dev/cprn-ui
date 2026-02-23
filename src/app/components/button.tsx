import { Coffee } from "lucide-react-native";
import React, { useEffect } from "react";
import { ComponentExample } from "@/components/component/ComponentExample";
import { Button } from "@/components/ui/Button/Button";
import { Divider } from "@/components/ui/Divider/Divider";
import { HStack } from "@/components/ui/HStack/HStack";
import { Radio } from "@/components/ui/Radio/Radio";
import { Switch } from "@/components/ui/Switch/Switch";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useToggle } from "@/hooks/useToggle";

export default function ButtonScreen() {
	const [size, setSize] = React.useState<"sm" | "md" | "lg">("md");
	const [action, setAction] = React.useState<
		"primary" | "secondary" | "tertiary"
	>("primary");
	const [isDisabled, toggleIsDisabled] = useToggle(false);

	useEffect(() => {
		console.log(size, action);
	}, [size, action]);

	return (
		<ComponentExample component="Button">
			<ComponentExample.Section title="Button">
				<VStack
					gap={4}
					justify="center"
					items="center"
					style={tw`justify-center items-center`}
				>
					<VStack gap={4} justify="center" items="center" style={tw`h-48`}>
						<Button
							variant="contained"
							action={action}
							size={size}
							isDisabled={isDisabled}
						>
							<Button.Text>Contained Button</Button.Text>
						</Button>
						<Button
							variant="outlined"
							action={action}
							size={size}
							isDisabled={isDisabled}
						>
							<Button.Text>Outlined Button</Button.Text>
						</Button>
						<Button
							variant="ghost"
							action={action}
							size={size}
							isDisabled={isDisabled}
						>
							<Button.Text>Ghost Button</Button.Text>
						</Button>
					</VStack>
					<Divider />
					<VStack flex={1} gap={4}>
						{/*@ts-ignore*/}
						<Radio.Group value={action} onChange={setAction} horizontal>
							<Radio value="primary" label="Primary" />
							<Radio value="secondary" label="Secondary" />
							<Radio value="tertiary" label="Tertiary" />
						</Radio.Group>
						{/* @ts-ignore */}
						<Radio.Group value={size} onChange={setSize} horizontal>
							<Radio value="sm" label="Small" />
							<Radio value="md" label="Medium" />
							<Radio value="lg" label="Large" />
						</Radio.Group>
						<Switch
							checked={isDisabled}
							onCheckedChange={toggleIsDisabled}
							label="isDisabled"
						/>
					</VStack>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Button with Icon">
				<VStack gap={4} justify="center" items="center">
					<Button variant="contained" action="primary">
						<Button.Icon as={Coffee} />
						<Button.Text>Button with Icon</Button.Text>
					</Button>
					<Button variant="outlined" action="primary">
						<Button.Icon as={Coffee} />
						<Button.Text>Button with Icon</Button.Text>
					</Button>
					<Button variant="ghost" action="primary">
						<Button.Icon as={Coffee} />
						<Button.Text>Button with Icon</Button.Text>
					</Button>
				</VStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Button Group">
				<VStack gap={4} justify="center" items="center">
					<VStack gap={4} justify="center" items="center">
						<Button.Group variant="contained" size="md" action="primary">
							<Button>
								<Button.Text>Left</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Right</Button.Text>
							</Button>
						</Button.Group>
						<Button.Group variant="outlined" size="md" action="primary">
							<Button>
								<Button.Text>Left</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Right</Button.Text>
							</Button>
						</Button.Group>
						<Button.Group variant="ghost" size="md" action="primary">
							<Button>
								<Button.Text>Left</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Right</Button.Text>
							</Button>
						</Button.Group>
					</VStack>
					<HStack gap={4} justify="center" items="center">
						<Button.Group
							horizontal={false}
							variant="contained"
							size="md"
							action="primary"
						>
							<Button>
								<Button.Text>Top</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Bottom</Button.Text>
							</Button>
						</Button.Group>
						<Button.Group
							horizontal={false}
							variant="outlined"
							size="md"
							action="primary"
						>
							<Button>
								<Button.Text>Top</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Bottom</Button.Text>
							</Button>
						</Button.Group>
						<Button.Group
							horizontal={false}
							variant="ghost"
							size="md"
							action="primary"
						>
							<Button>
								<Button.Text>Top</Button.Text>
							</Button>
							<Button>
								<Button.Text>Middle</Button.Text>
							</Button>
							<Button>
								<Button.Text>Bottom</Button.Text>
							</Button>
						</Button.Group>
					</HStack>
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
