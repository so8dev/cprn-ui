import { cva } from "class-variance-authority";

export const dividerVariants = cva("", {
	variants: {
		orientation: {
			horizontal: "w-full h-px",
			vertical: "h-full w-px",
		},
		thickness: {
			thin: "",
			medium: "",
			thick: "",
		},
		color: {
			outline: "bg-light-outline dark:bg-dark-outline",
			outlineVariant: "bg-light-outlineVariant dark:bg-dark-outlineVariant",
			surfaceVariant: "bg-light-surfaceVariant dark:bg-dark-surfaceVariant",
		},
	},
	compoundVariants: [
		// Horizontal thickness variants
		{
			orientation: "horizontal",
			thickness: "thin",
			className: "h-px",
		},
		{
			orientation: "horizontal",
			thickness: "medium",
			className: "h-0.5",
		},
		{
			orientation: "horizontal",
			thickness: "thick",
			className: "h-1",
		},
		// Vertical thickness variants
		{
			orientation: "vertical",
			thickness: "thin",
			className: "w-px",
		},
		{
			orientation: "vertical",
			thickness: "medium",
			className: "w-0.5",
		},
		{
			orientation: "vertical",
			thickness: "thick",
			className: "w-1",
		},
	],
	defaultVariants: {
		orientation: "horizontal",
		thickness: "thin",
		color: "outlineVariant",
	},
});
