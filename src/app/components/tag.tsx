import { Network } from "lucide-react-native";
import { ComponentExample } from "@/components/component/ComponentExample";
import { HStack } from "@/components/ui/HStack/HStack";
import { Tag } from "@/components/ui/Tag/Tag";

export default function TagScreen() {
	return (
		<ComponentExample component="Tag">
			<ComponentExample.Section title="Basic Usage">
				<HStack gap={4} justify="center" items="center">
					<Tag variant="filled">
						<Tag.Text>Filled Tag</Tag.Text>
					</Tag>
					<Tag variant="outlined">
						<Tag.Text>Outlined Tag</Tag.Text>
					</Tag>
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Sizes">
				<HStack gap={4} justify="center" items="center">
					<Tag size="sm">
						<Tag.Text>Small Tag</Tag.Text>
					</Tag>
					<Tag size="md">
						<Tag.Text>Medium Tag</Tag.Text>
					</Tag>
					<Tag size="lg">
						<Tag.Text>Large Tag</Tag.Text>
					</Tag>
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="With Icon">
				<HStack gap={4} justify="center" items="center">
					<Tag size="sm">
						<Tag.Icon as={Network} />
						<Tag.Text>Network</Tag.Text>
					</Tag>

					<Tag size="md">
						<Tag.Icon as={Network} />
						<Tag.Text>Network</Tag.Text>
					</Tag>

					<Tag variant="outlined" size="lg">
						<Tag.Icon as={Network} />
						<Tag.Text>Network</Tag.Text>
					</Tag>
				</HStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
