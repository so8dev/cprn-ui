import { VariantProps } from "class-variance-authority";
import { ComponentProps, ReactNode } from "react";
import { Text, View } from "react-native";
import { Style } from "twrnc";
import {
	formControlErrorTextVariants,
	formControlHelperTextVariants,
	formControlLabelVariants,
	formControlVariants,
} from "./variants";

export type FormControlProps = Omit<ComponentProps<typeof View>, "style"> &
	VariantProps<typeof formControlVariants> & {
		style?: Style;
		children: ReactNode;
	};

export type FormControlLabelProps = Omit<ComponentProps<typeof Text>, "style"> &
	VariantProps<typeof formControlLabelVariants> & {
		style?: Style;
		children: ReactNode;
	};

export type FormControlHelperTextProps = Omit<
	ComponentProps<typeof Text>,
	"style"
> &
	VariantProps<typeof formControlHelperTextVariants> & {
		style?: Style;
		children: ReactNode;
	};

export type FormControlErrorTextProps = Omit<
	ComponentProps<typeof Text>,
	"style"
> &
	VariantProps<typeof formControlErrorTextVariants> & {
		style?: Style;
		children: ReactNode;
	};
