import { cva } from "class-variance-authority";

export const textVariants = cva("align-baseline", {
	variants: {
		size: {
			xs: "text-xs",
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
			xl: "text-xl",
		},
		weight: {
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
		},
		color: {
			primary: "text-light-primary dark:text-dark-primary",
			secondary: "text-light-secondary dark:text-dark-secondary",
			tertiary: "text-light-tertiary dark:text-dark-tertiary",
			onBackground: "text-light-onBackground dark:text-dark-onBackground",
			onSurface: "text-light-onSurface dark:text-dark-onSurface",
			onSurfaceVariant:
				"text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
			onPrimary: "text-light-onPrimary dark:text-dark-onPrimary",
			onSecondary: "text-light-onSecondary dark:text-dark-onSecondary",
			onTertiary: "text-light-onTertiary dark:text-dark-onTertiary",
			error: "text-light-error dark:text-dark-error",
		},
	},
	defaultVariants: {
		size: "md",
		weight: "normal",
		color: "onBackground",
	},
});
