import { cva } from "class-variance-authority";

export const radioVariants = cva(
	"w-6 h-6 rounded-full border-2 justify-center items-center",
	{
		variants: {
			checked: {
				true: [
					"border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant bg-transparent",
					"disabled:border-light-onSurface/38 dark:disabled:border-dark-onSurface/38",
				],
				false: [
					"border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant bg-transparent",
					"disabled:border-light-onSurface/38 dark:disabled:border-dark-onSurface/38",
				],
			},
		},
		defaultVariants: {
			checked: false,
		},
	},
);

export const radioInnerVariants = cva(["w-3 h-3 rounded-full"], {
	variants: {
		checked: {
			true: [
				"bg-light-primary dark:bg-dark-primary",
				"disabled:bg-light-onSurface/38 dark:disabled:bg-dark-onSurface/38",
			],
			false: ["hidden"],
		},
	},
	defaultVariants: {
		checked: false,
	},
});

export const radioLabelVariants = cva([
	"text-base",
	"text-light-onSurface dark:text-dark-onSurface",
	"disabled:text-light-onSurface/38 dark:disabled:text-dark-onSurface/38",
]);

export const radioGroupVariants = cva("flex gap-2", {
	variants: {
		horizontal: {
			true: "flex-row items-center",
			false: "flex-col",
		},
	},
	defaultVariants: {
		horizontal: false,
	},
});
