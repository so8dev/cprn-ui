import { View } from "react-native";
import tw from "../twrnc.config";
import { VStackProps } from "./types";
import { vStackVariants } from "./variants";

export const VStack = (props: VStackProps) => {
	const { flex, justify, items, gap, p, pl, pr, pt, pb, bg, style, ...rest } =
		props;
	const defaultStyle = vStackVariants({
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
