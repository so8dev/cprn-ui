import { forwardRef } from "react";
import { Text as RNText, View } from "react-native";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import tw from "../twrnc.config";
import { TagProvider, useTag } from "./context";
import type { TagIconProps, TagProps, TagTextProps } from "./types";
import { tagIconVariants, tagTextVariants, tagVariants } from "./variants";

const TagRoot = forwardRef<View, TagProps>(
	({ style, variant = "filled", size = "md", children, ...props }, ref) => {
		return (
			<TagProvider value={{ variant, size }}>
				<View
					ref={ref}
					style={tw.style(tagVariants({ variant, size }), style)}
					{...props}
				>
					{children}
				</View>
			</TagProvider>
		);
	},
);

const TagText = forwardRef<RNText, TagTextProps>(
	({ style, size, children, ...props }, ref) => {
		const { size: contextSize } = useTag();
		const resolvedSize = size || contextSize;

		return (
			<Text
				size={resolvedSize}
				style={tw.style(tagTextVariants({}), style)}
				{...props}
			>
				{children}
			</Text>
		);
	},
);

const TagIcon = forwardRef<RNText, TagIconProps>(
	({ style, as: IconComponent, size, ...props }, ref) => {
		const { size: contextSize } = useTag();
		const resolvedSize = size || contextSize;
		const classes = tagIconVariants({});

		return (
			<Icon
				size={resolvedSize}
				as={IconComponent}
				style={tw.style(classes, style)}
				{...props}
			/>
		);
	},
);

export const Tag = Object.assign(TagRoot, {
	Text: TagText,
	Icon: TagIcon,
});
