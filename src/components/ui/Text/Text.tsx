import { Text as RNText } from "react-native";
import tw from "../twrnc.config";
import { TextProps } from "./types";
import { textVariants } from "./variants";

export function Text({
	size,
	weight,
	color,
	style,
	children,
	...props
}: TextProps) {
	const defaultStyle = textVariants({ size, weight, color });

	return (
		<RNText
			accessibilityRole="text"
			style={tw.style(defaultStyle, style)}
			{...props}
		>
			{children}
		</RNText>
	);
}
