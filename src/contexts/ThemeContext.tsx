import React, { PropsWithChildren } from "react";
import { useAppColorScheme, useDeviceContext } from "twrnc";
import tw from "@/components/ui/twrnc.config";

/*
 * Theme Provider
 */
type ColorScheme = "light" | "dark";

const ThemeContext = React.createContext<{
	colorScheme: ColorScheme | null;
	toggleTheme: () => void;
} | null>(null);

export function ThemeProvider(props: PropsWithChildren) {
	useDeviceContext(tw, {
		observeDeviceColorSchemeChanges: false,
		initialColorScheme: "device",
	});

	const [colorScheme, toggleColorScheme] = useAppColorScheme(tw);

	const toggleTheme = () => {
		toggleColorScheme();
	};

	return (
		<ThemeContext.Provider
			key={colorScheme}
			{...props}
			value={{ colorScheme: colorScheme || "light", toggleTheme }}
		/>
	);
}

export function useTheme() {
	const context = React.useContext(ThemeContext);

	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}

	return context;
}
