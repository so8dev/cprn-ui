import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Home, Settings } from "lucide-react-native";
import { Pressable, View } from "react-native";
import { Style } from "twrnc";
import { Icon } from "@/components/ui/Icon/Icon";
import tw from "@/components/ui/twrnc.config";

const icons = {
	index: Home,
	settings: Settings,
} as const;

export function Tabbar({
	state,
	navigation,
	style,
}: Pick<BottomTabBarProps, "state" | "navigation"> & {
	style?: Style;
}) {
	return (
		<View
			style={tw.style(`bg-light-background dark:bg-dark-background`, style)}
		>
			{/* <View style={tw`bg-light-background dark:bg-dark-background w-full absolute bottom-0 left-0`}> */}
			<View
				// edges={["bottom"]}
				style={tw.style(
					`flex flex-row justify-between items-center`,
					`bg-light-background dark:bg-dark-background`,
				)}
			>
				{state.routes.map((route, index) => {
					const isActive = state.index === index;
					const IconComponent = icons[route.name as keyof typeof icons];

					const onPress = () => {
						const event = navigation.emit({
							type: "tabPress",
							target: route.key,
							canPreventDefault: true,
						});

						if (!isActive && !event.defaultPrevented) {
							// The `merge: true` option makes sure that the params inside the tab screen are preserved
							// @ts-ignore
							navigation.navigate({ name: route.name, merge: true });
						}
					};

					const onLongPress = () => {
						navigation.emit({
							type: "tabLongPress",
							target: route.key,
						});
					};

					return (
						<Pressable
							key={route.key}
							onPress={onPress}
							onLongPress={onLongPress}
							style={tw.style(
								`px-8 py-4 flex-1`,
								isActive &&
									`border-t-2 border-light-primary dark:border-dark-primary`,
							)}
						>
							<Icon
								as={IconComponent}
								size="md"
								color={isActive ? "primary" : "onSurface"}
							/>
						</Pressable>
					);
				})}
			</View>
		</View>
	);
}
