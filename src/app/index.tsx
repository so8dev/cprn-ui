import { ScrollView } from "react-native";
import { ComponentList } from "@/components/component/ComponentList";
import { HStack } from "@/components/ui/HStack/HStack";
import tw from "@/components/ui/twrnc.config";

export default function Index() {
	return (
		<HStack
			style={tw`flex-1 items-start bg-light-background dark:bg-dark-background`}
		>
			<ScrollView scrollEventThrottle={16} style={tw`flex-3 h-full`}>
				<ComponentList />
			</ScrollView>
		</HStack>
	);
}
