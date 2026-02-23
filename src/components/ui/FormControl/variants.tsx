import { cva } from "class-variance-authority";

export const formControlVariants = cva("gap-2", {
	variants: {
		isRequired: {
			true: "",
			false: "",
		},
		isError: {
			true: "",
			false: "",
		},
		isDisabled: {
			true: "",
			false: "",
		},
		isReadOnly: {
			true: "",
			false: "",
		},
	},
	defaultVariants: {
		isRequired: false,
		isError: false,
		isDisabled: false,
		isReadOnly: false,
	},
});

export const formControlLabelVariants = cva("text-sm font-medium ml-1", {
	variants: {
		isError: {
			true: "text-light-error dark:text-dark-error",
			false: "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
		},
		isDisabled: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		{
			isError: false,
			isDisabled: true,
			className: "text-light-onSurface/60 dark:text-dark-onSurface/60",
		},
		{
			isError: true,
			isDisabled: true,
			className: "text-light-error/60 dark:text-dark-error/60",
		},
	],
	defaultVariants: {
		isError: false,
		isDisabled: false,
	},
});

export const formControlHelperTextVariants = cva("text-xs ml-1", {
	variants: {
		isError: {
			true: "text-light-error dark:text-dark-error",
			false: "text-light-onSurfaceVariant dark:text-dark-onSurfaceVariant",
		},
		isDisabled: {
			true: "",
			false: "",
		},
	},
	compoundVariants: [
		{
			isError: false,
			isDisabled: true,
			className:
				"text-light-onSurfaceVariant/60 dark:text-dark-onSurfaceVariant/60",
		},
		{
			isError: true,
			isDisabled: true,
			className: "text-light-error/60 dark:text-dark-error/60",
		},
	],
	defaultVariants: {
		isError: false,
		isDisabled: false,
	},
});

export const formControlErrorTextVariants = cva("text-xs ml-1", {
	variants: {
		isDisabled: {
			true: "text-light-error/60 dark:text-dark-error/60",
			false: "text-light-error dark:text-dark-error",
		},
	},
	defaultVariants: {
		isDisabled: false,
	},
});
