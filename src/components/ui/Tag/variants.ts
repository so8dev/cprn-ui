import { cva } from "class-variance-authority";

export const tagVariants = cva(
	"flex-row items-center justify-center rounded-2xl border px-3 py-1 gap-2 self-start",
	{
		variants: {
			variant: {
				filled:
					"border-transparent bg-light-secondaryContainer dark:bg-dark-secondaryContainer",
				outlined:
					"bg-transparent border-light-outline dark:border-dark-outline",
			},
			size: {
				sm: "h-7 px-2",
				md: "h-8 px-3",
				lg: "h-10 px-4",
			},
		},
		defaultVariants: {
			variant: "filled",
			size: "md",
		},
	},
);

export const tagTextVariants = cva("", {
	variants: {},
	defaultVariants: {},
});

export const tagIconVariants = cva("", {
	variants: {},
	defaultVariants: {},
});
