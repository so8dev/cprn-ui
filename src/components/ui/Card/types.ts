import type { VariantProps } from "class-variance-authority";
import { ViewProps } from "react-native";
import { Style } from "twrnc";
import type { cardVariants } from "./variants";

export type CardProps = Omit<ViewProps, "style"> &
	VariantProps<typeof cardVariants> & {
		style?: Style;
	};
