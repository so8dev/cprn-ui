import { cva } from "class-variance-authority";

export const cardVariants = cva("flex-1 rounded-2xl p-4", {
	variants: {
		variant: {
			filled:
				"bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest",
			outlined:
				"bg-transparent " +
				"border border-light-outline dark:border-dark-outline",
			elevated:
				"bg-light-surfaceContainer dark:bg-dark-surfaceContainer " +
				"shadow-lg",
		},
	},
	defaultVariants: {
		variant: "filled",
	},
});
