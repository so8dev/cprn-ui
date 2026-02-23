import type { VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react-native";
import type { PressableProps } from "react-native";
import { Style } from "twrnc";
import type { fabVariants } from "./variants";

export type FABVariantProps = VariantProps<typeof fabVariants>;

export type FABPlacement =
	| "top left"
	| "top right"
	| "bottom left"
	| "bottom right"
	| "top center"
	| "bottom center";

export interface FABProps
	extends Omit<PressableProps, "children">,
		Omit<FABVariantProps, "extended" | "placement"> {
	icon?: LucideIcon;
	label?: string;
	style?: Style;
	placement?: FABPlacement;
}
