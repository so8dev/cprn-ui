import { cva } from "class-variance-authority";

export const listVariants = cva(
	"w-full py-2 bg-light-surface dark:bg-dark-surface rounded-xl overflow-hidden",
);

export const listItemVariants = cva(
	"flex-row items-center px-4 py-3 gap-4 border-b border-light-outlineVariant dark:border-dark-outlineVariant last:border-b-0",
	{
		variants: {
			active: {
				true: "bg-light-state-pressed dark:bg-dark-state-pressed",
			},
		},
	},
);

export const listItemButtonVariants = cva(
	[
		"flex-row items-center px-4 py-3 gap-4",
		"border-b border-light-outlineVariant dark:border-dark-outlineVariant last:border-b-0",
		"hover:bg-light-surfaceVariant dark:hover:bg-dark-surfaceVariant",
	],
	{
		variants: {},
	},
);

export const listItemTextVariants = cva("text-base", {
	variants: {
		primary: {
			true: "text-light-onSurface dark:text-dark-onSurface font-medium",
			false:
				"text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant text-sm",
		},
	},
	defaultVariants: {
		primary: true,
	},
});

export const listItemIconVariants = cva(
	"text-2xl text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
);
