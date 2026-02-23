import { ComponentExample } from "@/components/component/ComponentExample";
import { Divider } from "@/components/ui/Divider/Divider";
import { FormControl } from "@/components/ui/FormControl/FormControl";
import { HStack } from "@/components/ui/HStack/HStack";
import { Input } from "@/components/ui/Input/Input";
import { Switch } from "@/components/ui/Switch/Switch";
import { Text } from "@/components/ui/Text/Text";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useToggle } from "@/hooks/useToggle";

export default function FormControlScreen() {
	const [showLabel, toggleShowLabel] = useToggle(true);
	const [showHelperText, toggleShowHelperText] = useToggle(true);
	const [isError, toggleIsError] = useToggle(false);
	const [isDisabled, toggleIsDisabled] = useToggle(false);
	const [isReadOnly, toggleIsReadOnly] = useToggle(false);

	return (
		<ComponentExample component="FormControl">
			<ComponentExample.Section title="Form Controls">
				<VStack gap={4}>
					<VStack gap={4} justify="center" style={tw`h-120`}>
						<FormControl
							isRequired
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							{showLabel && (
								<FormControl.Label>Outlined Input</FormControl.Label>
							)}
							<Input variant="outlined">
								<Input.TextField placeholder="Outlined Input" />
							</Input>
							{showHelperText && (
								<FormControl.HelperText>
									This is an outlined input
								</FormControl.HelperText>
							)}
							<FormControl.ErrorText>
								This is an error message
							</FormControl.ErrorText>
						</FormControl>
						<Divider />
						<FormControl
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							{showLabel && (
								<FormControl.Label>Underlined Input</FormControl.Label>
							)}
							<Input variant="underlined">
								<Input.TextField placeholder="Underlined Input" />
							</Input>
							{showHelperText && (
								<FormControl.HelperText>
									This is an underlined input
								</FormControl.HelperText>
							)}
							<FormControl.ErrorText>
								This is an error message
							</FormControl.ErrorText>
						</FormControl>
						<Divider />
						<FormControl
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							{showLabel && <FormControl.Label>Filled Input</FormControl.Label>}
							<Input variant="filled">
								<Input.TextField placeholder="Filled Input" />
							</Input>
							{showHelperText && (
								<FormControl.HelperText>
									This is a filled input
								</FormControl.HelperText>
							)}
							<FormControl.ErrorText>
								This is an error message
							</FormControl.ErrorText>
						</FormControl>
						<Divider />
						<FormControl
							isError={isError}
							isDisabled={isDisabled}
							isReadOnly={isReadOnly}
						>
							{showLabel && <FormControl.Label>Ghost Input</FormControl.Label>}
							<Input variant="ghost">
								<Input.TextField placeholder="Ghost Input" />
							</Input>
							{showHelperText && (
								<FormControl.HelperText>
									This is a ghost input
								</FormControl.HelperText>
							)}
							<FormControl.ErrorText>
								This is an error message
							</FormControl.ErrorText>
						</FormControl>
					</VStack>
					<Divider />
					<VStack flex={1} gap={4}>
						<HStack>
							<Switch checked={showLabel} onCheckedChange={toggleShowLabel} />
							<Text>Show Label</Text>
						</HStack>
						<HStack>
							<Switch
								checked={showHelperText}
								onCheckedChange={toggleShowHelperText}
							/>
							<Text>Show Helper Text</Text>
						</HStack>
						<HStack>
							<Switch checked={isError} onCheckedChange={toggleIsError} />
							<Text>isError</Text>
						</HStack>
						<HStack>
							<Switch checked={isDisabled} onCheckedChange={toggleIsDisabled} />
							<Text>isDisabled</Text>
						</HStack>
						<HStack>
							<Switch checked={isReadOnly} onCheckedChange={toggleIsReadOnly} />
							<Text>isReadOnly</Text>
						</HStack>
					</VStack>
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
