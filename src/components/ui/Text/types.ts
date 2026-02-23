import { VariantProps } from "class-variance-authority";
import { ComponentProps, JSX } from "react";
import { Text as RNText } from "react-native";
import { Style } from "twrnc";
import { textVariants } from "./variants";

export type TextProps = Omit<ComponentProps<typeof RNText>, "style"> &
	VariantProps<typeof textVariants> & {
		style?: Style;
		as?: keyof JSX.IntrinsicElements;
	};
