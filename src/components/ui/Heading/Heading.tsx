import { Text } from "react-native";
import tw from "../twrnc.config";
import { HeadingProps } from "./types";
import { headingVariants } from "./variants";

export function Heading({
	level = 1,
	color,
	style,
	children,
	...props
}: HeadingProps) {
	const defaultStyle = headingVariants({ level, color });

	return (
		<Text
			role="heading"
			aria-level={level}
			style={tw.style(defaultStyle, style)}
			{...props}
		>
			{children}
		</Text>
	);
}
