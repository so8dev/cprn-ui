import { cva } from "class-variance-authority";

export const switchTrackVariants = cva(
	"w-12 h-6 rounded-full flex-row items-center",
	{
		variants: {
			checked: {
				true: "",
				false: "",
			},
			disabled: {
				true: "",
				false: "",
			},
		},
		compoundVariants: [
			// Unchecked Default
			{
				checked: false,
				disabled: false,
				className:
					"bg-light-surfaceVariant dark:bg-dark-surfaceVariant " +
					"border-2 border-light-outline dark:border-dark-outline",
			},
			// Unchecked Disabled
			{
				checked: false,
				disabled: true,
				className:
					"bg-light-surfaceVariant/38 dark:bg-dark-surfaceVariant/38 " +
					"border-2 border-light-onSurface/12 dark:border-dark-onSurface/12",
			},
			// Checked Default
			{
				checked: true,
				disabled: false,
				className:
					"bg-light-primary dark:bg-dark-primary " +
					"border-2 border-light-primary dark:border-dark-primary",
			},
			// Checked Disabled
			{
				checked: true,
				disabled: true,
				className:
					"bg-light-onSurface/12 dark:bg-dark-onSurface/12 " +
					"border-2 border-light-onSurface/12 dark:border-dark-onSurface/12",
			},
		],
		defaultVariants: {
			checked: false,
			disabled: false,
		},
	},
);

export const switchThumbVariants = cva("w-4 h-4 rounded-full", {
	variants: {
		checked: {
			true: "",
			false: "",
		},
		disabled: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		// Unchecked Default
		{
			checked: false,
			disabled: false,
			className: "bg-light-outline dark:bg-dark-outline",
		},
		// Unchecked Disabled
		{
			checked: false,
			disabled: true,
			className: "bg-light-onSurface/38 dark:bg-dark-onSurface/38",
		},
		// Checked Default
		{
			checked: true,
			disabled: false,
			className: "bg-light-onPrimary dark:bg-dark-onPrimary",
		},
		// Checked Disabled
		{
			checked: true,
			disabled: true,
			className: "bg-light-surface dark:bg-dark-surface",
		},
	],
	defaultVariants: {
		checked: false,
		disabled: false,
	},
});
