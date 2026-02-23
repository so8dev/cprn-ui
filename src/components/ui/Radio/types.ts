import type { VariantProps } from "class-variance-authority";

import { Style } from "twrnc";
import type { radioGroupVariants, radioVariants } from "./variants";

export type RadioState = {
	disabled?: boolean;
};

export type RadioProps = VariantProps<typeof radioVariants> &
	RadioState & {
		value?: string;
		defaultChecked?: boolean;
		onChange?: (checked: boolean) => void;
		label?: string;
		style?: Style;
	};

export type RadioGroupProps = VariantProps<typeof radioGroupVariants> & {
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	children: React.ReactNode[];
	style?: Style;
};
