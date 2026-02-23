import { VariantProps } from "class-variance-authority";
import { ViewProps } from "react-native";
import { Style } from "twrnc";
import { hStackVariants } from "./variants";

export type HStackProps = Omit<ViewProps, "style"> &
	VariantProps<typeof hStackVariants> & {
		style?: Style;
	};
