import type { VariantProps } from "class-variance-authority";
import type { PressableProps } from "react-native";
import { Style } from "twrnc";
import type { selectVariants } from "./variants";

export type SelectVariantProps = VariantProps<typeof selectVariants>;

export interface SelectOption {
	label: string;
	value: string;
}

export interface SelectProps {
	children: React.ReactNode;
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	variant?: "outlined" | "filled" | "underlined" | "ghost";
	state?: "error" | "default" | "focused";
	disabled?: boolean;
}

export interface SelectTriggerProps
	extends Omit<PressableProps, "children" | "style"> {
	children?: React.ReactNode;
	style?: Style;
	placeholder?: string;
}

export interface SelectValueProps {
	placeholder?: string;
}

export interface SelectContentProps {
	children: React.ReactNode;
	title?: string;
}

export interface SelectOptionProps extends Omit<PressableProps, "children"> {
	value: string;
	label: string;
	closeOnSelect?: boolean;
}
