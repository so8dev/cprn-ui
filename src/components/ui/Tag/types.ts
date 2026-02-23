import type { VariantProps } from "class-variance-authority";
import type { ViewProps } from "react-native";
import { Style } from "twrnc";
import { IconProps } from "../Icon/types";
import { TextProps } from "../Text/types";
import type { tagIconVariants, tagTextVariants, tagVariants } from "./variants";

export interface TagProps
	extends Omit<ViewProps, "style">,
		VariantProps<typeof tagVariants> {
	style?: Style;
}

export interface TagTextProps
	extends TextProps,
		VariantProps<typeof tagTextVariants> {}

export interface TagIconProps
	extends IconProps,
		VariantProps<typeof tagIconVariants> {}
