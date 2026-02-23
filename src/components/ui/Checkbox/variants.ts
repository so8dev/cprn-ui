import { cva } from "class-variance-authority";

export const checkboxVariants = cva(
	"w-6 h-6 rounded border-2 justify-center items-center",
	{
		variants: {
			checked: {
				true: [
					"border-light-primary dark:border-dark-primary",
					"bg-light-primary dark:bg-dark-primary",
					"disabled:border-light-onSurface/38 dark:disabled:border-dark-onSurface/38",
					"disabled:bg-light-onSurface/38 dark:disabled:bg-dark-onSurface/38",
				],
				false: [
					"border-light-onSurfaceVariant dark:border-dark-onSurfaceVariant",
					"bg-transparent",
					"disabled:border-light-onSurface/38 dark:disabled:border-dark-onSurface/38",
					"disabled:bg-light-onSurface/38 dark:disabled:bg-dark-onSurface/38",
				],
			},
		},
		defaultVariants: {
			checked: false,
		},
	},
);

export const checkboxIconVariants = cva("text-xl leading-none", {
	variants: {
		checked: {
			true: [
				"text-light-onPrimary dark:text-dark-onPrimary",

				"disabled:text-light-surface/60 dark:disabled:text-dark-surface/60",
			],
			false: "hidden",
		},
	},
});

export const checkboxLabelVariants = cva([
	"text-base",
	"text-light-onSurface dark:text-dark-onSurface",
	"disabled:text-light-onSurface/38 dark:disabled:text-dark-onSurface/38",
]);

export const checkboxGroupVariants = cva("flex gap-2", {
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
