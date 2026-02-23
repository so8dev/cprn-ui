import { cva } from "class-variance-authority";

export const headingVariants = cva("font-bold", {
	variants: {
		level: {
			1: "text-3xl",
			2: "text-2xl",
			3: "text-xl",
			4: "text-lg",
			5: "text-base",
			6: "text-sm",
		},
		color: {
			primary: "text-light-primary dark:text-dark-primary",
			secondary: "text-light-secondary dark:text-dark-secondary",
			tertiary: "text-light-tertiary dark:text-dark-tertiary",
			onBackground: "text-light-onBackground dark:text-dark-onBackground",
			onSurface: "text-light-onSurface dark:text-dark-onSurface",
		},
	},
	defaultVariants: {
		level: 1,
		color: "onBackground",
	},
});
