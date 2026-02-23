import { Href, usePathname, useRouter } from "expo-router";
import { Menu, Search } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView } from "react-native";
import { Style } from "twrnc";
import { ActionSheet } from "@/components/ui/ActionSheet/ActionSheet";
import { FAB } from "@/components/ui/FAB/FAB";
import { Input } from "@/components/ui/Input/Input";
import { Text } from "@/components/ui/Text/Text";
import tw from "@/components/ui/twrnc.config";
import { VStack } from "@/components/ui/VStack/VStack";
import { useDisclosure } from "@/hooks/useDisclosure";

const components: Record<string, Href> = {
	ActionSheet: "/components/actionsheet",
	Button: "/components/button",
	Card: "/components/card",
	Checkbox: "/components/checkbox",
	FormControl: "/components/form-control",
	Heading: "/components/heading",
	Icon: "/components/icon",
	Input: "/components/input",
	List: "/components/list",
	Radio: "/components/radio",
	Select: "/components/select",
	Tag: "/components/tag",
	Text: "/components/text",
	Switch: "/components/switch",
};

function UIComponentList({
	pathname,
	onSelectComponent,
	style,
}: {
	pathname?: Href;
	onSelectComponent: (href: Href) => void;
	style?: Style;
}) {
	const [searchTerm, setSearchTerm] = React.useState("");

	return (
		<ScrollView
			keyboardShouldPersistTaps="always"
			style={tw.style("p-2", style)}
		>
			<Input variant="underlined">
				<Input.Slot>
					<Input.Icon as={Search} />
				</Input.Slot>
				<Input.TextField
					value={searchTerm}
					onChangeValue={setSearchTerm}
					placeholder="Search examples..."
				/>
			</Input>
			<VStack gap={1} p={2} pb={6}>
				{Object.entries(components)
					.filter(([name]) =>
						name.toLowerCase().includes(searchTerm.toLowerCase()),
					)
					.map(([name, href]) => (
						<Pressable
							key={name}
							onPress={() => onSelectComponent(href)}
							style={({ hovered, pressed }) =>
								tw.style(
									`px-2 py-1`,
									pressed &&
										`bg-light-tertiaryContainer/50 dark:bg-dark-tertiaryContainer/50`,
									hovered &&
										`bg-light-tertiaryContainer/50 dark:bg-dark-tertiaryContainer/50`,
									pathname === href &&
										`bg-light-tertiaryContainer dark:bg-dark-tertiaryContainer`,
									pathname === href &&
										`border-l-4 border-light-tertiary dark:border-dark-tertiary`,
								)
							}
						>
							<Text
								size="lg"
								weight="bold"
								color={pathname === href ? "tertiary" : "onBackground"}
							>
								{name}
							</Text>
						</Pressable>
					))}
			</VStack>
		</ScrollView>
	);
}

function XSComponentList() {
	const pathname = usePathname();

	const router = useRouter();

	const { isOpen, close, toggle } = useDisclosure();

	const handleSelectComponent = (href: Href) => {
		router.push(href);
		close();
	};

	return (
		<>
			<FAB
				icon={Menu}
				onPress={toggle}
				placement="bottom right"
				style={tw`sm:hidden`}
			/>
			<ActionSheet show={isOpen} onClose={close} style={tw`sm:hidden`}>
				<ActionSheet.Content>
					<UIComponentList
						pathname={pathname as Href}
						onSelectComponent={handleSelectComponent}
					/>
				</ActionSheet.Content>
			</ActionSheet>
		</>
	);
}

function SMComponentList() {
	const pathname = usePathname();

	const router = useRouter();

	const handleSelectComponent = (href: Href) => {
		router.push(href);
	};

	return (
		<UIComponentList
			pathname={pathname as Href}
			onSelectComponent={handleSelectComponent}
			style={tw`flex-1 h-full hidden sm:flex border-r border-light-onSurfaceVariant/20 dark:border-dark-onSurfaceVariant/20`}
		/>
	);
}

function ComponentList() {
	const pathname = usePathname();

	const router = useRouter();

	const handleSelectComponent = (href: Href) => {
		router.push(href);
	};

	return (
		<UIComponentList
			pathname={pathname as Href}
			onSelectComponent={handleSelectComponent}
			style={tw`flex-1 h-full`}
		/>
	);
}

ComponentList.XS = XSComponentList;
ComponentList.SM = SMComponentList;

export { ComponentList };
