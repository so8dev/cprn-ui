import { Eye, EyeOff, Send } from "lucide-react-native";
import React from "react";
import { ScrollView, TextInput, View } from "react-native";
import { ComponentExample } from "@/components/component/ComponentExample";
import { ActionSheet } from "@/components/ui/ActionSheet/ActionSheet";
import { Button } from "@/components/ui/Button/Button";
import { FormControl } from "@/components/ui/FormControl/FormControl";
import { Input } from "@/components/ui/Input/Input";
import { Text } from "@/components/ui/Text/Text";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useDisclosure } from "@/hooks/useDisclosure";
import { useToggle } from "@/hooks/useToggle";

export default function ActionsheetScreen() {
	const {
		isOpen: showBasicExample,
		open: openBasicExample,
		close: closeBasicExample,
	} = useDisclosure();

	const {
		isOpen: showWithTitleExample,
		open: openWithTitleExample,
		close: closeWithTitleExample,
	} = useDisclosure();

	const sizeOptions = ["sm", "md", "lg", "xl", "full"] as const;
	const [maxHeight, setMaxHeight] =
		React.useState<(typeof sizeOptions)[number]>("sm");
	const {
		isOpen: showMaxHeightExample,
		open: openMaxHeightExample,
		close: closeMaxHeightExample,
	} = useDisclosure();

	const {
		isOpen: showWithCommentExample,
		open: openWithCommentExample,
		close: closeWithCommentExample,
	} = useDisclosure();

	const {
		isOpen: showWithFormExample,
		open: openWithFormExample,
		close: closeWithFormExample,
	} = useDisclosure();

	const commentInputRef = React.useRef<TextInput>(null);
	const emailInputRef = React.useRef<TextInput>(null);
	const [showPassword, togglePasswordShown] = useToggle(false);

	return (
		<ComponentExample component="Action Sheet">
			<ComponentExample.Section title="Basic ActionSheet">
				<Button
					variant="contained"
					onPress={openBasicExample}
					style={tw`w-full`}
				>
					<Button.Text>Open Basic ActionSheet</Button.Text>
				</Button>
				<ActionSheet show={showBasicExample} onClose={closeBasicExample}>
					<ActionSheet.Content>
						<View style={tw`h-64 p-4`}>
							<Text>This is a basic ActionSheet example.</Text>
						</View>
					</ActionSheet.Content>
				</ActionSheet>
			</ComponentExample.Section>

			<ComponentExample.Section title="ActionSheet with Title">
				<Button
					variant="contained"
					onPress={openWithTitleExample}
					style={tw`w-full`}
				>
					<Button.Text>Open ActionSheet with Title</Button.Text>
				</Button>
				<ActionSheet
					show={showWithTitleExample}
					onClose={closeWithTitleExample}
				>
					<ActionSheet.Content title="Action Sheet Title">
						<View style={tw`h-64 p-4`}>
							<Text>This ActionSheet has a title.</Text>
						</View>
					</ActionSheet.Content>
				</ActionSheet>
			</ComponentExample.Section>

			<ComponentExample.Section title="ActionSheet with Max Height">
				<Button
					variant="contained"
					onPress={openMaxHeightExample}
					style={tw`w-full`}
				>
					<Button.Text>Open ActionSheet with Max Height</Button.Text>
				</Button>
				<ActionSheet
					show={showMaxHeightExample}
					onClose={closeMaxHeightExample}
				>
					<ActionSheet.Content title="Max Height Example" maxHeight={maxHeight}>
						<View style={tw`h-screen p-4 gap-2 items-center`}>
							<Button.Group>
								{sizeOptions.map((size) => (
									<Button
										key={size}
										variant={maxHeight === size ? "contained" : "outlined"}
										onPress={() => setMaxHeight(size)}
									>
										<Button.Text>{size}</Button.Text>
									</Button>
								))}
							</Button.Group>
							<Text>This ActionSheet has a max height of "{maxHeight}".</Text>
						</View>
					</ActionSheet.Content>
				</ActionSheet>
			</ComponentExample.Section>

			<ComponentExample.Section title="ActionSheet with Comment">
				<Button
					variant="contained"
					onPress={() => {
						openWithCommentExample();
						setTimeout(() => {
							commentInputRef.current?.focus();
						}, 100);
					}}
					style={tw`w-full`}
				>
					<Button.Text>Open ActionSheet with Comment</Button.Text>
				</Button>
				<ActionSheet
					show={showWithCommentExample}
					onClose={closeWithCommentExample}
				>
					<ActionSheet.Content maxHeight="sm" showDragHandle={false}>
						<View style={tw`px-4 pt-4 pb-8`}>
							<Input variant="ghost">
								<Input.TextField
									placeholder="ここに入力"
									ref={commentInputRef}
									onSubmitEditing={closeWithCommentExample}
									returnKeyType="done"
								/>
								<Input.Slot onPress={closeWithCommentExample}>
									<Input.Icon as={Send} />
								</Input.Slot>
							</Input>
						</View>
					</ActionSheet.Content>
				</ActionSheet>
			</ComponentExample.Section>

			<ComponentExample.Section title="ActionSheet with Form">
				<Button
					variant="contained"
					onPress={() => {
						openWithFormExample();
						setTimeout(() => {
							emailInputRef.current?.focus();
						}, 100);
					}}
					style={tw`w-full`}
				>
					<Button.Text>Open ActionSheet with Form</Button.Text>
				</Button>
				<ActionSheet show={showWithFormExample} onClose={closeWithFormExample}>
					<ActionSheet.Content
						maxHeight="xl"
						title="Example Form"
						showDragHandle={false}
					>
						<ScrollView
							keyboardShouldPersistTaps="handled"
							style={tw`px-4 pt-4 pb-8`}
						>
							<VStack p={6}>
								<FormControl>
									<FormControl.Label>Email</FormControl.Label>
									<Input variant="underlined">
										<Input.TextField
											placeholder="email@example.com"
											ref={emailInputRef}
											onSubmitEditing={closeWithFormExample}
											returnKeyType="done"
										/>
									</Input>
								</FormControl>
								<FormControl>
									<FormControl.Label>Password</FormControl.Label>
									<Input variant="underlined">
										<Input.TextField secureTextEntry={!showPassword} />
										<Input.Slot onPress={togglePasswordShown}>
											<Input.Icon as={showPassword ? EyeOff : Eye} />
										</Input.Slot>
									</Input>
								</FormControl>
								<FormControl>
									<FormControl.Label>Password Confirmation</FormControl.Label>
									<Input variant="underlined">
										<Input.TextField secureTextEntry={!showPassword} />
										<Input.Slot onPress={togglePasswordShown}>
											<Input.Icon as={showPassword ? EyeOff : Eye} />
										</Input.Slot>
									</Input>
								</FormControl>
								<Button onPress={closeWithFormExample}>
									<Button.Text>Sign up</Button.Text>
								</Button>
							</VStack>
						</ScrollView>
					</ActionSheet.Content>
				</ActionSheet>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
