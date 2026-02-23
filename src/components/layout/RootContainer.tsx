import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import tw from "@/components/ui/twrnc.config";
import { useTheme } from "@/contexts/ThemeContext";

export function RootContainer({ children }: { children: React.ReactNode }) {
	const insets = useSafeAreaInsets();
	const { colorScheme } = useTheme();

	return (
		<View
			style={{
				flex: 1,
				paddingTop: insets.top,
				paddingBottom: insets.bottom,
				backgroundColor: tw.color(`bg-${colorScheme}-background`),
			}}
		>
			{children}
		</View>
	);
}
