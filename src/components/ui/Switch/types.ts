import type { VariantProps } from "class-variance-authority";
import type { switchTrackVariants } from "./variants";

export type SwitchVariantProps = VariantProps<typeof switchTrackVariants>;

export interface SwitchProps extends Omit<SwitchVariantProps, "checked"> {
	checked?: boolean;
	defaultChecked?: boolean;
	onCheckedChange?: (checked: boolean) => void;
	style?: string;
	label?: string;
}
