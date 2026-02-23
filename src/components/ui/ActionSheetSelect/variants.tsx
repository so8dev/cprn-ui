import { cva } from "class-variance-authority";

export const selectVariants = cva("border-2 rounded-2xl px-4 py-3 text-base", {
	variants: {
		variant: {
			outlined: "bg-transparent",
			filled: "",
			underlined: "bg-transparent rounded-none border-0 border-b-2",
			ghost: "bg-transparent border-0 rounded-0",
		},
		state: {
			default: "",
			focused: "",
			error: "",
			disabled: "",
		},
	},
	compoundVariants: [
		// Outlined Default
		{
			variant: "outlined",
			state: "default",
			className:
				"border-light-outline dark:border-dark-outline " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Outlined Focused
		{
			variant: "outlined",
			state: "focused",
			className:
				"border-light-primary dark:border-dark-primary " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Outlined Error
		{
			variant: "outlined",
			state: "error",
			className:
				"border-light-error dark:border-dark-error " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Outlined Disabled
		{
			variant: "outlined",
			state: "disabled",
			className:
				"border-light-outline/38 dark:border-dark-outline/38 " +
				"text-light-onSurface/38 dark:text-dark-onSurface/38",
		},
		// Filled Default
		{
			variant: "filled",
			state: "default",
			className:
				"border-transparent bg-light-surfaceVariant dark:bg-dark-surfaceVariant " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Filled Focused
		{
			variant: "filled",
			state: "focused",
			className:
				"border-light-primary dark:border-dark-primary " +
				"bg-light-surfaceVariant dark:bg-dark-surfaceVariant " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Filled Error
		{
			variant: "filled",
			state: "error",
			className:
				"border-light-error dark:border-dark-error " +
				"bg-light-surfaceVariant dark:bg-dark-surfaceVariant " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Filled Disabled
		{
			variant: "filled",
			state: "disabled",
			className:
				"border-transparent bg-light-surfaceVariant/38 dark:bg-dark-surfaceVariant/38 " +
				"text-light-onSurface/38 dark:text-dark-onSurface/38",
		},
		// Underlined Default
		{
			variant: "underlined",
			state: "default",
			className:
				"border-light-outline dark:border-dark-outline " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Underlined Focused
		{
			variant: "underlined",
			state: "focused",
			className:
				"border-light-primary dark:border-dark-primary " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Underlined Error
		{
			variant: "underlined",
			state: "error",
			className:
				"border-light-error dark:border-dark-error " +
				"text-light-onSurface dark:text-dark-onSurface",
		},
		// Underlined Disabled
		{
			variant: "underlined",
			state: "disabled",
			className:
				"border-light-outline/38 dark:border-dark-outline/38 " +
				"text-light-onSurface/38 dark:text-dark-onSurface/38",
		},
		// Ghost Default
		{
			variant: "ghost",
			state: "default",
			className: "text-light-onSurface dark:text-dark-onSurface",
		},
		// Ghost Focused
		{
			variant: "ghost",
			state: "focused",
			className: "text-light-primary dark:text-dark-primary",
		},
		// Ghost Error
		{
			variant: "ghost",
			state: "error",
			className: "text-light-error dark:text-dark-error",
		},
		// Ghost Disabled
		{
			variant: "ghost",
			state: "disabled",
			className: "text-light-onSurface/38 dark:text-dark-onSurface/38",
		},
	],
	defaultVariants: {
		variant: "outlined",
		state: "default",
	},
});
