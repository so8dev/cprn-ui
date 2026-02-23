import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import type { Style } from "twrnc";
import type {
	selectContentVariants,
	selectItemVariants,
	selectTriggerVariants,
} from "./variants";

export interface SelectProps {
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	initialLabel?: string;
	open?: boolean;
	defaultOpen?: boolean;
	onOpenChange?: (open: boolean) => void;
	disabled?: boolean;
	children: ReactNode;
}

export interface SelectTriggerProps
	extends VariantProps<typeof selectTriggerVariants> {
	children?: ReactNode;
	style?: Style;
	disabled?: boolean;
}

export interface SelectValueProps {
	placeholder?: string;
	style?: Style;
}

export interface SelectContentProps
	extends VariantProps<typeof selectContentVariants> {
	children: ReactNode;
	style?: Style;
}

export interface SelectItemProps
	extends VariantProps<typeof selectItemVariants> {
	value: string;
	label: string;
	children?: ReactNode; // Optional, defaults to label text if not provided
	disabled?: boolean;
	style?: Style;
}
