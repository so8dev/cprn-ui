import { Home, Settings, User } from "lucide-react-native";
import { ComponentExample } from "@/components/component/ComponentExample";
import { HStack } from "@/components/ui/HStack/HStack";
import { List } from "@/components/ui/List/List";
import tw from "@/components/ui/twrnc.config";

export default function ListScreen() {
	return (
		<ComponentExample component="List">
			<ComponentExample.Section title="Basic Usage">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<List>
						<List.Item>
							<List.ItemText>Item 1</List.ItemText>
						</List.Item>
						<List.Item>
							<List.ItemText>Item 2</List.ItemText>
						</List.Item>
						<List.Item>
							<List.ItemText>Item 3</List.ItemText>
						</List.Item>
					</List>
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="With Icons">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<List>
						<List.Item>
							<List.ItemIcon as={Home} />
							<List.ItemText>Home</List.ItemText>
						</List.Item>
						<List.Item>
							<List.ItemIcon as={Settings} />
							<List.ItemText>Settings</List.ItemText>
						</List.Item>
						<List.Item>
							<List.ItemIcon as={User} />
							<List.ItemText>Profile</List.ItemText>
						</List.Item>
					</List>
				</HStack>
			</ComponentExample.Section>

			<ComponentExample.Section title="Pressable Items">
				<HStack gap={4} justify="center" items="center" style={tw`h-40`}>
					<List>
						<List.ItemButton onPress={() => alert("Item 1 pressed")}>
							<List.ItemIcon as={Home} />
							<List.ItemText>Home</List.ItemText>
						</List.ItemButton>
						<List.ItemButton onPress={() => alert("Item 2 pressed")}>
							<List.ItemIcon as={Settings} />
							<List.ItemText>Settings</List.ItemText>
						</List.ItemButton>
						<List.ItemButton onPress={() => alert("Item 3 pressed")}>
							<List.ItemIcon as={User} />
							<List.ItemText>Profile</List.ItemText>
						</List.ItemButton>
					</List>
				</HStack>
			</ComponentExample.Section>
		</ComponentExample>
	);
}
