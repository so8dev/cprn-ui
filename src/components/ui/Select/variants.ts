import { cva } from "class-variance-authority";

export const selectTriggerVariants = cva(
	"flex-row items-center justify-between rounded-md border border-light-outline dark:border-dark-outline bg-light-surface dark:bg-dark-surface px-3 py-2 text-sm",
	{
		variants: {
			disabled: {
				true: "opacity-50",
			},
			error: {
				true: "border-light-error dark:border-dark-error",
			},
		},
		defaultVariants: {
			disabled: false,
			error: false,
		},
	},
);

export const selectContentVariants = cva(
	"relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-light-outline dark:border-dark-outline bg-light-surface dark:bg-dark-surface shadow-md",
);

export const selectItemVariants = cva(
	"relative flex-row w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 active:bg-light-surfaceVariant active:dark:bg-dark-surfaceVariant outline-none focus:bg-light-surfaceVariant focus:dark:bg-dark-surfaceVariant",
	{
		variants: {
			disabled: {
				true: "opacity-50 pointer-events-none",
			},
		},
		defaultVariants: {
			disabled: false,
		},
	},
);

export const selectLabelVariants = cva(
	"py-1.5 pl-8 pr-2 text-sm font-semibold text-light-onSurface dark:text-dark-onSurface",
);

export const selectSeparatorVariants = cva(
	"-mx-1 my-1 h-px bg-light-outlineVariant dark:bg-dark-outlineVariant",
);
