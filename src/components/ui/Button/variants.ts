import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"rounded-2xl justify-center flex-row items-center gap-2 active:scale-95",
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
				sm: "h-8 px-3",
				md: "h-10 px-4",
				lg: "h-12 px-6",
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
					"active:bg-light-primaryContainer/70 dark:active:bg-dark-primaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
				],
			},
			// Contained Secondary
			{
				variant: "contained",
				action: "secondary",
				className: [
					"bg-light-secondaryContainer dark:bg-dark-secondaryContainer",
					"hover:bg-light-secondaryContainer/90 dark:hover:bg-dark-secondaryContainer/90",
					"active:bg-light-secondaryContainer/70 dark:active:bg-dark-secondaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
				],
			},
			// Contained Tertiary
			{
				variant: "contained",
				action: "tertiary",
				className: [
					"bg-light-tertiaryContainer dark:bg-dark-tertiaryContainer",
					"hover:bg-light-tertiaryContainer/90 dark:hover:bg-dark-tertiaryContainer/90",
					"active:bg-light-tertiaryContainer/70 dark:active:bg-dark-tertiaryContainer/70",
					"disabled:bg-light-outline/50 dark:disabled:bg-dark-outline/50",
				],
			},
			// Outlined Primary
			{
				variant: "outlined",
				action: "primary",
				className: [
					"hover:bg-light-primaryContainer/10 dark:hover:bg-dark-primaryContainer/10",
					"active:bg-light-primaryContainer/30 dark:active:bg-dark-primaryContainer/30",
				],
			},
			// Outlined Secondary
			{
				variant: "outlined",
				action: "secondary",
				className: [
					"hover:bg-light-secondaryContainer/10 dark:hover:bg-dark-secondaryContainer/10",
					"active:bg-light-secondaryContainer/30 dark:active:bg-dark-secondaryContainer/30",
				],
			},
			// Outlined Tertiary
			{
				variant: "outlined",
				action: "tertiary",
				className: [
					"hover:bg-light-tertiaryContainer/10 dark:hover:bg-dark-tertiaryContainer/10",
					"active:bg-light-tertiaryContainer/30 dark:active:bg-dark-tertiaryContainer/30",
				],
			},
			// Ghost Primary
			{
				variant: "ghost",
				action: "primary",
				className: [
					"hover:bg-light-primaryContainer/10 dark:hover:bg-dark-primaryContainer/10",
					"active:bg-light-primaryContainer/30 dark:active:bg-dark-primaryContainer/30",
				],
			},
			// Ghost Secondary
			{
				variant: "ghost",
				action: "secondary",
				className: [
					"hover:bg-light-secondaryContainer/10 dark:hover:bg-dark-secondaryContainer/10",
					"active:bg-light-secondaryContainer/30 dark:active:bg-dark-secondaryContainer/30",
				],
			},
			// Ghost Tertiary
			{
				variant: "ghost",
				action: "tertiary",
				className: [
					"hover:bg-light-tertiaryContainer/10 dark:hover:bg-dark-tertiaryContainer/10",
					"active:bg-light-tertiaryContainer/30 dark:active:bg-dark-tertiaryContainer/30",
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

export const buttonTextVariants = cva("font-medium text-center", {
	variants: {
		variant: {
			contained: "",
			outlined: "",
			ghost: "",
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
		},
		action: {
			primary: "",
			secondary: "",
			tertiary: "",
		},
	},
	defaultVariants: {
		variant: "contained",
		size: "md",
		action: "primary",
	},
	compoundVariants: [
		// Contained Primary
		{
			variant: "contained",
			action: "primary",
			className: [
				"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
				"hover:text-light-onPrimaryContainer/90 dark:hover:text-dark-onPrimaryContainer/90",
				"active:text-light-onPrimaryContainer/80 dark:active:text-dark-onPrimaryContainer/80",
				"disabled:text-light-onPrimaryContainer/50 dark:disabled:text-dark-onPrimaryContainer/50",
			],
		},
		// Contained Secondary
		{
			variant: "contained",
			action: "secondary",
			className: [
				"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
				"hover:text-light-onSecondaryContainer/90 dark:hover:text-dark-onSecondaryContainer/90",
				"active:text-light-onSecondaryContainer/80 dark:active:text-dark-onSecondaryContainer/80",
				"disabled:text-light-onSecondaryContainer/50 dark:disabled:text-dark-onSecondaryContainer/50",
			],
		},
		// Contained Tertiary
		{
			variant: "contained",
			action: "tertiary",
			className: [
				"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
				"hover:text-light-onTertiaryContainer/90 dark:hover:text-dark-onTertiaryContainer/90",
				"active:text-light-onTertiaryContainer/80 dark:active:text-dark-onTertiaryContainer/80",
				"disabled:text-light-onTertiaryContainer/50 dark:disabled:text-dark-onTertiaryContainer/50",
			],
		},
		// Outlined Primary
		{
			variant: "outlined",
			action: "primary",
			className: [
				"text-light-primary dark:text-dark-primary",
				"hover:text-light-primary/90 dark:hover:text-dark-primary/90",
				"active:text-light-primary/80 dark:active:text-dark-primary/80",
				"disabled:text-light-primary/50 dark:disabled:text-dark-primary/50",
			],
		},
		// Outlined Secondary
		{
			variant: "outlined",
			action: "secondary",
			className: [
				"text-light-secondary dark:text-dark-secondary",
				"hover:text-light-secondary/90 dark:hover:text-dark-secondary/90",
				"active:text-light-secondary/80 dark:active:text-dark-secondary/80",
				"disabled:text-light-secondary/50 dark:disabled:text-dark-secondary/50",
			],
		},
		// Outlined Tertiary
		{
			variant: "outlined",
			action: "tertiary",
			className: [
				"text-light-tertiary dark:text-dark-tertiary",
				"hover:text-light-tertiary/90 dark:hover:text-dark-tertiary/90",
				"active:text-light-tertiary/80 dark:active:text-dark-tertiary/80",
				"disabled:text-light-tertiary/50 dark:disabled:text-dark-tertiary/50",
			],
		},
		// Ghost Primary
		{
			variant: "ghost",
			action: "primary",
			className: [
				"text-light-primary dark:text-dark-primary",
				"hover:text-light-primary/90 dark:hover:text-dark-primary/90",
				"active:text-light-primary/80 dark:active:text-dark-primary/80",
				"disabled:text-light-primary/50 dark:disabled:text-dark-primary/50",
			],
		},
		// Ghost Secondary
		{
			variant: "ghost",
			action: "secondary",
			className: [
				"text-light-secondary dark:text-dark-secondary",
				"hover:text-light-secondary/90 dark:hover:text-dark-secondary/90",
				"active:text-light-secondary/80 dark:active:text-dark-secondary/80",
				"disabled:text-light-secondary/50 dark:disabled:text-dark-secondary/50",
			],
		},
		// Ghost Tertiary
		{
			variant: "ghost",
			action: "tertiary",
			className: [
				"text-light-tertiary dark:text-dark-tertiary",
				"hover:text-light-tertiary/90 dark:hover:text-dark-tertiary/90",
				"active:text-light-tertiary/80 dark:active:text-dark-tertiary/80",
				"disabled:text-light-tertiary/50 dark:disabled:text-dark-tertiary/50",
			],
		},
	],
});

export const buttonIconVariants = cva("", {
	variants: {
		action: {
			primary: [
				"text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer",
				"hover:text-light-onPrimaryContainer/90 dark:hover:text-dark-onPrimaryContainer/90",
				"active:text-light-onPrimaryContainer/80 dark:active:text-dark-onPrimaryContainer/80",
				"disabled:text-light-onPrimaryContainer/50 dark:disabled:text-dark-onPrimaryContainer/50",
			],
			secondary: [
				"text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer",
				"hover:text-light-onSecondaryContainer/90 dark:hover:text-dark-onSecondaryContainer/90",
				"active:text-light-onSecondaryContainer/80 dark:active:text-dark-onSecondaryContainer/80",
				"disabled:text-light-onSecondaryContainer/50 dark:disabled:text-dark-onSecondaryContainer/50",
			],
			tertiary: [
				"text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer",
				"hover:text-light-onTertiaryContainer/90 dark:hover:text-dark-onTertiaryContainer/90",
				"active:text-light-onTertiaryContainer/80 dark:active:text-dark-onTertiaryContainer/80",
				"disabled:text-light-onTertiaryContainer/50 dark:disabled:text-dark-onTertiaryContainer/50",
			],
		},
		size: {
			sm: "w-4 h-4",
			md: "w-5 h-5",
			lg: "w-6 h-6",
		},
	},
	defaultVariants: {
		action: "primary",
		size: "md",
	},
});

export const buttonGroupVariants = cva("flex bg-transparent", {
	variants: {
		horizontal: {
			true: "flex-row",
			false: "flex-col",
		},
	},
	defaultVariants: {
		horizontal: true,
	},
});

export const groupedButtonVariants = cva("", {
	variants: {
		horizontal: {
			true: "not-first:rounded-l-0 not-last:rounded-r-0",
			false: "not-first:rounded-t-0 not-last:rounded-b-0",
		},
		variant: {
			contained: "border-light-outline dark:border-dark-outline",
			outlined: "",
			ghost: "border-light-outline dark:border-dark-outline",
		},
	},
	compoundVariants: [
		{
			horizontal: true,
			variant: "contained",
			className: ["not-first:border-l not-last:border-r"],
		},
		{
			horizontal: false,
			variant: "contained",
			className: ["not-first:border-t not-last:border-b"],
		},
		{
			horizontal: true,
			variant: "outlined",
			className: ["not-first:border-l not-last:border-r"],
		},
		{
			horizontal: false,
			variant: "outlined",
			className: ["not-first:border-t not-last:border-b"],
		},
		{
			horizontal: true,
			variant: "ghost",
			className: ["not-first:border-l not-last:border-r"],
		},
		{
			horizontal: false,
			variant: "ghost",
			className: ["not-first:border-t not-last:border-b"],
		},
	],
	defaultVariants: {
		horizontal: true,
		variant: "contained",
	},
});
export const groupedButtonVariants_old = cva(
	"not-first:rounded-l-0 not-last:rounded-r-0",
	{
		variants: {
			variant: {
				contained: [
					"not-first:border-l not-last:border-r",
					"border-light-outline dark:border-dark-outline",
				],
				outlined: ["not-first:border-l not-last:border-r"],
				ghost: [
					"not-first:border-l not-last:border-r",
					"border-light-outline dark:border-dark-outline",
				],
			},
		},
		defaultVariants: {
			variant: "contained",
		},
	},
);
