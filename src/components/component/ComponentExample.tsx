import { Card } from "../ui/Card/Card";
import { Heading } from "../ui/Heading/Heading";
import { Text } from "../ui/Text/Text";
import tw from "../ui/twrnc.config";
import { VStack } from "../ui/VStack/VStack";
import type {
	ComponentExampleProps,
	ComponentExampleSectionProps,
} from "./types";

function ComponentExampleRoot(props: ComponentExampleProps) {
	const {
		component,
		description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
		children,
		style,
	} = props;
	return (
		<VStack p={2} style={style}>
			<Heading level={1}>{component}</Heading>
			<Text color="onSurfaceVariant">{description}</Text>
			{children}
		</VStack>
	);
}

function ComponentExampleSection(props: ComponentExampleSectionProps) {
	const {
		title,
		description = "Lorem ipsum dolor sit amet...",
		children,
	} = props;
	return (
		<VStack p={2}>
			<Heading level={2}>{title}</Heading>
			<Text color="onSurfaceVariant">{description}</Text>
			<Card variant="elevated" style={tw`flex-grow`}>
				{children}
			</Card>
		</VStack>
	);
}

export const ComponentExample = Object.assign(ComponentExampleRoot, {
	Section: ComponentExampleSection,
});
