import { Moon, Sun } from "lucide-react-native";
import { View } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "../ui/Button/Button";
import { HStack } from "../ui/HStack/HStack";
import { Icon } from "../ui/Icon/Icon";
import tw from "../ui/twrnc.config";

export function Header(props: { headerShown?: boolean }) {
	const { colorScheme, toggleTheme } = useTheme();
	if (!props.headerShown) {
		return null;
	}
	return (
		<View style={tw`bg-light-background dark:bg-dark-background`}>
			<HStack justify="end" style={tw`h-16`}>
				<Button variant="ghost" onPress={toggleTheme} style={tw.style("mr-2")}>
					<Icon as={colorScheme === "dark" ? Sun : Moon} color="onSurface" />
				</Button>
			</HStack>
		</View>
	);
}
