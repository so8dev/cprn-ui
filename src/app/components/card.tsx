import { ComponentExample } from "@/components/component/ComponentExample";
import { Card } from "@/components/ui/Card/Card";
import { Divider } from "@/components/ui/Divider/Divider";
import { Heading } from "@/components/ui/Heading/Heading";
import { Text } from "@/components/ui/Text/Text";
import { VStack } from "@/components/ui/VStack/VStack";

export default function CardScreen() {
	return (
		<ComponentExample component="Card">
			<ComponentExample.Section title="Variants">
				<VStack flex={1} gap={4}>
					<Card variant="filled">
						<VStack gap={4}>
							<Heading level={4}>Filled Card</Heading>
							<Divider />
							<Text>This is a filled card.</Text>
						</VStack>
					</Card>
					<Card variant="elevated">
						<VStack gap={4}>
							<Heading level={4}>Elevated Card</Heading>
							<Divider />
							<Text>This is an elevated card.</Text>
						</VStack>
					</Card>
					<Card variant="outlined">
						<VStack gap={4}>
							<Heading level={4}>Outlined Card</Heading>
							<Divider />
							<Text>This is an outlined card.</Text>
						</VStack>
					</Card>
				</VStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
