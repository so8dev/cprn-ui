import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import {
	Pressable,
	PressableStateCallbackType,
	Text,
	ViewProps,
} from "react-native";
import { Style } from "twrnc";
import { IconProps } from "../Icon/types";
import {
	buttonGroupVariants,
	buttonTextVariants,
	buttonVariants,
} from "./variants";

export type ButtonState = {
	isDisabled?: boolean;
	isHovered?: boolean;
	isPressed?: boolean;
};

export type ButtonProps = Omit<
	ComponentProps<typeof Pressable>,
	"style" | "children" | "disabled"
> &
	VariantProps<typeof buttonVariants> &
	ButtonState & {
		style?: Style | ((state: PressableStateCallbackType) => Style);
		attributes?: {
			firstChild?: boolean;
			lastChild?: boolean;
		};
		children: React.ReactNode;
	};

export type ButtonTextProps = Omit<ComponentProps<typeof Text>, "style"> &
	VariantProps<typeof buttonTextVariants> &
	ButtonState & {
		style?: Style | ((state: PressableStateCallbackType) => Style);
	};

export type ButtonIconProps = IconProps;

export type ButtonGroupProps = Omit<ViewProps, "children" | "style"> &
	VariantProps<typeof buttonGroupVariants> &
	Pick<ButtonProps, "variant" | "action" | "size" | "isDisabled"> & {
		children: React.ReactNode[];
		style?: Style;
	};
