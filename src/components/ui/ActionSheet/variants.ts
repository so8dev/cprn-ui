import { cva } from "class-variance-authority";

export const actionSheetBackdropVariants = cva(
	"flex-1 bg-black/50 justify-end",
);

export const actionSheetContentVariants = cva(
	"bg-light-surface dark:bg-dark-surface rounded-t-3xl overflow-hidden",
	{
		variants: {
			maxHeight: {
				sm: "max-h-64",
				md: "max-h-80",
				lg: "max-h-96",
				xl: "max-h-[32rem]",
				full: "max-h-[90vh]",
			},
		},
		defaultVariants: {
			maxHeight: "lg",
		},
	},
);

export const actionSheetHeaderVariants = cva(
	"px-4 py-4 border-b border-light-outlineVariant dark:border-dark-outlineVariant",
);

export const actionSheetDragHandleVariants = cva(
	"w-12 h-1 bg-light-onSurfaceVariant/40 dark:bg-dark-onSurfaceVariant/40 rounded-full self-center mb-3",
);

export const actionSheetTitleVariants = cva(
	"text-lg font-semibold text-light-onSurface dark:text-dark-onSurface",
);
