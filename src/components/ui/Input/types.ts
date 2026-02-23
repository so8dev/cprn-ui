import { VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react-native";
import { ComponentProps } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Style } from "twrnc";
import {
	inputFieldVariants,
	inputSlotVariants,
	inputVariants,
} from "./variants";

export type InputState = {
	isError?: boolean;
	isDisabled?: boolean;
	isReadOnly?: boolean;
};

export type InputProps = Omit<ComponentProps<typeof View>, "style"> &
	VariantProps<typeof inputVariants> &
	InputState & {
		style?: Style;
		children: React.ReactNode;
	};

export type TextFieldProps = Omit<
	ComponentProps<typeof TextInput>,
	"style" | "onChangeText" | "editable" | "readOnly"
> &
	VariantProps<typeof inputFieldVariants> &
	InputState & {
		style?: Style;
		onChangeValue?: (value: string) => void;
	};

export type NumberFieldProps = Omit<
	ComponentProps<typeof TextInput>,
	| "style"
	| "multiline"
	| "numberOfLines"
	| "keyboardType"
	| "value"
	| "defaultValue"
	| "onChangeText"
	| "editable"
	| "readOnly"
> &
	VariantProps<typeof inputFieldVariants> &
	InputState & {
		style?: Style;
		value?: number;
		defaultValue?: number;
		onChangeValue?: (value: number | null) => void;
	};

export type TextareaProps = Omit<
	ComponentProps<typeof TextInput>,
	"style" | "onChangeText" | "numberOfLines" | "editable" | "readOnly"
> &
	VariantProps<typeof inputFieldVariants> &
	InputState & {
		style?: Style;
		onChangeValue?: (value: string) => void;
	};

export type InputSlotProps = Omit<ComponentProps<typeof Pressable>, "style"> &
	VariantProps<typeof inputSlotVariants> & {
		style?: Style;
		children: React.ReactNode;
	};

export type InputIconProps = {
	as: LucideIcon;
	style?: Style;
};
