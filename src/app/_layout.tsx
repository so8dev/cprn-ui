import { Stack } from "expo-router";
import { StrictMode } from "react";
import { RootContainer } from "@/components/layout/RootContainer";
import { ToggleThemeFab } from "@/components/theme/ToggleThemeFab";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function RootLayout() {
	return (
		<StrictMode>
			<ThemeProvider>
				<RootContainer>
					<Stack
						screenOptions={{ headerShown: false }}
						screenLayout={({ children }) => (
							<>
								<ToggleThemeFab />
								{children}
							</>
						)}
					/>
				</RootContainer>
			</ThemeProvider>
		</StrictMode>
	);
}
