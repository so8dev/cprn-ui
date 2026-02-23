import type { VariantProps } from "class-variance-authority";
import { Style } from "twrnc";
import type { checkboxGroupVariants, checkboxVariants } from "./variants";

export type CheckboxState = {
	disabled?: boolean;
};

export type CheckboxProps = VariantProps<typeof checkboxVariants> &
	CheckboxState & {
		value?: string;
		defaultChecked?: boolean;
		onChange?: (checked: boolean) => void;
		label?: string;
		style?: Style;
	};

export type CheckboxGroupProps = VariantProps<typeof checkboxGroupVariants> & {
	value?: string[];
	defaultValue?: string[];
	onChange?: (values: string[]) => void;
	children: React.ReactNode[];
	style?: Style;
};
