import { Moon, Sun } from "lucide-react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { FAB } from "../ui/FAB/FAB";

export function ToggleThemeFab(props: React.ComponentProps<typeof FAB>) {
	const { colorScheme, toggleTheme } = useTheme();
	return (
		<FAB
			variant="tertiary"
			placement="top right"
			icon={colorScheme === "light" ? Moon : Sun}
			onPress={toggleTheme}
			{...props}
		/>
	);
}
