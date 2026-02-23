import { cva } from "class-variance-authority";

export const inputVariants = cva(
	"flex-row items-center rounded-xl overflow-hidden",
	{
		variants: {
			variant: {
				outlined: [
					"border-2 border-light-outline dark:border-dark-outline",
					"focus:border-light-primary dark:focus:border-dark-primary",
					"data-invalid:border-light-error dark:data-invalid:border-dark-error",
					"disabled:bg-light-surfaceVariant/30 dark:disabled:bg-dark-surfaceVariant/30 " +
						"disabled:border-light-outline/30 dark:disabled:border-dark-outline/30",
				],
				filled: [
					"bg-light-surfaceContainerHighest dark:bg-dark-surfaceContainerHighest",
					"focus:bg-light-primaryContainer/10 dark:focus:bg-dark-primaryContainer/10",
					"data-invalid:bg-light-errorContainer/20 dark:data-invalid:bg-dark-errorContainer/20",
					"disabled:bg-light-surfaceVariant/30 dark:disabled:bg-dark-surfaceVariant/30 " +
						"disabled:border-light-outline/30 dark:disabled:border-dark-outline/30",
				],
				underlined: [
					"border-b-2 border-light-outline dark:border-dark-outline rounded-none",
					"focus:border-light-primary dark:focus:border-dark-primary",
					"data-invalid:border-light-error dark:data-invalid:border-dark-error",
					"disabled:bg-light-surfaceVariant/30 dark:disabled:bg-dark-surfaceVariant/30 " +
						"disabled:border-light-outline/30 dark:disabled:border-dark-outline/30",
				],
				ghost: ["bg-transparent"],
			},
			size: {
				sm: "h-9",
				md: "h-11",
				lg: "h-13",
			},
		},
		defaultVariants: {
			variant: "outlined",
			size: "md",
		},
	},
);

export const inputFieldVariants = cva(
	"flex-1 text-base mx-2 " +
		"text-light-onSurface dark:text-dark-onSurface " +
		"placeholder:text-light-onSurfaceVariant/60 dark:placeholder:text-dark-onSurfaceVariant/60 " +
		"outline-none",

	{
		variants: {
			size: {
				sm: "text-sm",
				md: "text-base",
				lg: "text-lg",
			},
		},
		defaultVariants: {
			size: "md",
		},
	},
);

export const inputSlotVariants = cva(
	"h-full justify-center items-center px-3",
	{
		variants: {},
		defaultVariants: {},
	},
);

export const inputIconVariants = cva("", {
	variants: {
		state: {
			default: "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
			error: "text-light-error dark:text-dark-error",
			focused: "text-light-primary dark:text-dark-primary",
		},
	},
	defaultVariants: {
		state: "default",
	},
});
