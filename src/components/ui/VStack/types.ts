import { VariantProps } from "class-variance-authority";
import { ViewProps } from "react-native";
import { Style } from "twrnc";
import { vStackVariants } from "./variants";

export type VStackProps = Omit<ViewProps, "style"> &
	VariantProps<typeof vStackVariants> & {
		style?: Style;
	};
