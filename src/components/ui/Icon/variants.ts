import { cva } from "class-variance-authority";

export const iconVariants = cva("", {
	variants: {
		color: {
			primary: "text-light-primary dark:text-dark-primary",
			secondary: "text-light-secondary dark:text-dark-secondary",
			tertiary: "text-light-tertiary dark:text-dark-tertiary",
			error: "text-light-error dark:text-dark-error",
			onSurface: "text-light-onSurface dark:text-dark-onSurface",
		},
		size: {
			sm: "text-sm",
			md: "text-md",
			lg: "text-lg",
		},
	},
	defaultVariants: {
		color: "onSurface",
		size: "md",
	},
});

export const iconActionVariants = cva(
	"rounded-full justify-center flex-row items-center active:scale-95",
	{
		variants: {
			variant: {
				contained: "",
				outlined: [
					"border-2 border-light-outline dark:border-dark-outline bg-transparent",
					"disabled:border-light-outline/50 dark:disabled:border-dark-outline/50",
				],
				ghost: "bg-transparent",
			},
			size: {
				sm: "text-sm p-1",
				md: "text-md p-1.5",
				lg: "text-lg p-2",
			},
			action: {
				primary: "",
				secondary: "",
				tertiary: "",
			},
		},
		compoundVariants: [
			// Contained Primary
			{
				variant: "contained",
				action: "primary",
				className: [
					"bg-light-primaryContainer dark:bg-dark-primaryContainer",
					"hover:bg-light-primaryContainer/90 dark:hover:bg-dark-primaryContainer/90",
					"focus:bg-light-primaryContainer/80 dark:focus:bg-dark-primaryContainer/80",
					"active:bg-light-primaryContainer/70 dark:active:bg-dark-primaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
					"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Contained Secondary
			{
				variant: "contained",
				action: "secondary",
				className: [
					"bg-light-secondaryContainer dark:bg-dark-secondaryContainer",
					"hover:bg-light-secondaryContainer/90 dark:hover:bg-dark-secondaryContainer/90",
					"focus:bg-light-secondaryContainer/80 dark:focus:bg-dark-secondaryContainer/80",
					"active:bg-light-secondaryContainer/70 dark:active:bg-dark-secondaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
					"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Contained Tertiary
			{
				variant: "contained",
				action: "tertiary",
				className: [
					"bg-light-tertiaryContainer dark:bg-dark-tertiaryContainer",
					"hover:bg-light-tertiaryContainer/90 dark:hover:bg-dark-tertiaryContainer/90",
					"focus:bg-light-tertiaryContainer/80 dark:focus:bg-dark-tertiaryContainer/80",
					"active:bg-light-tertiaryContainer/70 dark:active:bg-dark-tertiaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
					"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Outlined Primary
			{
				variant: "outlined",
				action: "primary",
				className: [
					"hover:bg-light-primaryContainer/10 dark:hover:bg-dark-primaryContainer/10",
					"focus:bg-light-primaryContainer/20 dark:focus:bg-dark-primaryContainer/20",
					"active:bg-light-primaryContainer/30 dark:active:bg-dark-primaryContainer/30",
					"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Outlined Secondary
			{
				variant: "outlined",
				action: "secondary",
				className: [
					"hover:bg-light-secondaryContainer/10 dark:hover:bg-dark-secondaryContainer/10",
					"focus:bg-light-secondaryContainer/20 dark:focus:bg-dark-secondaryContainer/20",
					"active:bg-light-secondaryContainer/30 dark:active:bg-dark-secondaryContainer/30",
					"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Outlined Tertiary
			{
				variant: "outlined",
				action: "tertiary",
				className: [
					"hover:bg-light-tertiaryContainer/10 dark:hover:bg-dark-tertiaryContainer/10",
					"focus:bg-light-tertiaryContainer/20 dark:focus:bg-dark-tertiaryContainer/20",
					"active:bg-light-tertiaryContainer/30 dark:active:bg-dark-tertiaryContainer/30",
					"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Ghost Primary
			{
				variant: "ghost",
				action: "primary",
				className: [
					"hover:bg-light-primaryContainer/10 dark:hover:bg-dark-primaryContainer/10",
					"focus:bg-light-primaryContainer/20 dark:focus:bg-dark-primaryContainer/20",
					"active:bg-light-primaryContainer/30 dark:active:bg-dark-primaryContainer/30",
					"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Ghost Secondary
			{
				variant: "ghost",
				action: "secondary",
				className: [
					"hover:bg-light-secondaryContainer/10 dark:hover:bg-dark-secondaryContainer/10",
					"focus:bg-light-secondaryContainer/20 dark:focus:bg-dark-secondaryContainer/20",
					"active:bg-light-secondaryContainer/30 dark:active:bg-dark-secondaryContainer/30",
					"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
			// Ghost Tertiary
			{
				variant: "ghost",
				action: "tertiary",
				className: [
					"hover:bg-light-tertiaryContainer/10 dark:hover:bg-dark-tertiaryContainer/10",
					"focus:bg-light-tertiaryContainer/20 dark:focus:bg-dark-tertiaryContainer/20",
					"active:bg-light-tertiaryContainer/30 dark:active:bg-dark-tertiaryContainer/30",
					"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
					"disabled:text-light-onSurface/50 dark:disabled:text-dark-onSurface/50",
				],
			},
		],
		defaultVariants: {
			variant: "contained",
			size: "md",
			action: "primary",
		},
	},
);
