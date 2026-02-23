import { View } from "react-native";
import tw from "../twrnc.config";
import { HStackProps } from "./types";
import { hStackVariants } from "./variants";

export const HStack = (props: HStackProps) => {
	const { flex, justify, items, gap, p, pl, pr, pt, pb, bg, style, ...rest } =
		props;
	const defaultStyle = hStackVariants({
		flex,
		justify,
		items,
		gap,
		p,
		pl,
		pr,
		pt,
		pb,
		bg,
	});
	return <View style={tw.style(defaultStyle, style)} {...rest} />;
};
