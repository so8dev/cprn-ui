import { Slot } from "expo-router";
import { ScrollView } from "react-native";
import { HStack } from "@/components/ui/HStack/HStack";
import tw from "@/components/ui/twrnc.config";
import { ComponentList } from "../../components/component/ComponentList";

export default function ComponentsLayout() {
	return (
		<>
			<ComponentList.XS />
			<HStack flex={1} bg="background">
				<ComponentList.SM />
				<ScrollView
					keyboardShouldPersistTaps="handled"
					scrollEventThrottle={16}
					style={tw`flex-3`}
					contentContainerStyle={tw`p-4 flex-grow`}
				>
					<Slot />
				</ScrollView>
			</HStack>
		</>
	);
}
