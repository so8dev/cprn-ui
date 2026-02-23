import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Text } from "react-native";
import { Style } from "twrnc";
import { headingVariants } from "./variants";

export type HeadingProps = Omit<ComponentProps<typeof Text>, "style"> &
	VariantProps<typeof headingVariants> & {
		style?: Style;
	};
