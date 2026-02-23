import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { View } from "react-native";
import { Style } from "twrnc";
import { dividerVariants } from "./variants";

export type DividerProps = Omit<ComponentProps<typeof View>, "style"> &
	VariantProps<typeof dividerVariants> & {
		style?: Style;
	};
