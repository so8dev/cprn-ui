import type { VariantProps } from "class-variance-authority";
import type {
	PressableProps,
	TextProps as RNTextProps,
	ViewProps,
} from "react-native";
import { Style } from "twrnc";
import type {
	listItemIconVariants,
	listItemTextVariants,
	listItemVariants,
	listVariants,
} from "./variants";

export interface ListProps
	extends Omit<ViewProps, "style">,
		VariantProps<typeof listVariants> {
	style?: Style;
}

export interface ListItemProps
	extends Omit<ViewProps, "style">,
		VariantProps<typeof listItemVariants> {
	style?: Style;
}

export interface ListItemButtonProps
	extends Omit<PressableProps, "style">,
		VariantProps<typeof listItemVariants> {
	style?: Style;
}

export interface ListItemTextProps
	extends Omit<RNTextProps, "style">,
		VariantProps<typeof listItemTextVariants> {
	style?: Style;
}

export interface ListItemIconProps
	extends RNTextProps,
		VariantProps<typeof listItemIconVariants> {
	style?: Style;
	as?: React.ElementType;
}
