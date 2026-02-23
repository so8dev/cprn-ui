import { cva } from "class-variance-authority";

export const fabVariants = cva(
	"z-99 rounded-2xl justify-center items-center shadow-lg active:shadow-md transition-all",
	{
		variants: {
			variant: {
				primary: "",
				secondary: "",
				tertiary: "",
				surface: "",
			},
			size: {
				small: "",
				medium: "",
				large: "",
			},
			extended: {
				true: "px-4",
				false: "",
			},
			placement: {
				"top left": "absolute top-4 left-4",
				"top right": "absolute top-4 right-4",
				"bottom left": "absolute bottom-4 left-4",
				"bottom right": "absolute bottom-4 right-4",
				"top center": "absolute top-4 self-center",
				"bottom center": "absolute bottom-4 self-center",
				none: "",
			},
		},
		compoundVariants: [
			// Small size
			{
				size: "small",
				extended: false,
				className: "w-10 h-10",
			},
			{
				size: "small",
				extended: true,
				className: "h-10 min-w-20",
			},
			// Medium size
			{
				size: "medium",
				extended: false,
				className: "w-14 h-14",
			},
			{
				size: "medium",
				extended: true,
				className: "h-14 min-w-24",
			},
			// Large size
			{
				size: "large",
				extended: false,
				className: "w-24 h-24 rounded-[28px]",
			},
			{
				size: "large",
				extended: true,
				className: "h-24 min-w-32 rounded-[28px]",
			},
			// Primary variant
			{
				variant: "primary",
				className:
					"bg-light-primaryContainer dark:bg-dark-primaryContainer " +
					"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
			},
			// Secondary variant
			{
				variant: "secondary",
				className:
					"bg-light-secondaryContainer dark:bg-dark-secondaryContainer " +
					"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
			},
			// Tertiary variant
			{
				variant: "tertiary",
				className:
					"bg-light-tertiaryContainer dark:bg-dark-tertiaryContainer " +
					"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
			},
			// Surface variant
			{
				variant: "surface",
				className:
					"bg-light-surface dark:bg-dark-surface " +
					"text-light-primary dark:text-dark-primary " +
					"border border-light-outline dark:border-dark-outline",
			},
		],
		defaultVariants: {
			variant: "primary",
			size: "medium",
			extended: false,
			placement: "none",
		},
	},
);
