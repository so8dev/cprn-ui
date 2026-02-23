import { View } from "react-native";
import tw from "../twrnc.config";
import type { CardProps } from "./types";
import { cardVariants } from "./variants";

export function Card({
	variant = "filled",
	children,
	style,
	...props
}: CardProps) {
	const cardStyle = cardVariants({ variant });

	return (
		<View style={tw.style(cardStyle, style)} {...props}>
			{children}
		</View>
	);
}
