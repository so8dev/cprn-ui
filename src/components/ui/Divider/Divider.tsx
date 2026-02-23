import { View } from "react-native";
import tw from "../twrnc.config";
import { DividerProps } from "./types";
import { dividerVariants } from "./variants";

export function Divider({
	orientation,
	thickness,
	color,
	style,
	...props
}: DividerProps) {
	const defaultStyle = dividerVariants({ orientation, thickness, color });

	return <View style={tw.style(defaultStyle, style)} {...props} />;
}
