import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useToggle } from "@/hooks/useToggle";
import { useFormControl } from "../FormControl/context";
import tw from "../twrnc.config";
import { InputProvider, useInput } from "./context";
import type {
	InputIconProps,
	InputProps,
	InputSlotProps,
	NumberFieldProps,
	TextareaProps,
	TextFieldProps,
} from "./types";
import {
	inputFieldVariants,
	inputIconVariants,
	inputSlotVariants,
	inputVariants,
} from "./variants";

function InputRoot({
	variant,
	size,
	isError = false,
	isDisabled = false,
	isReadOnly = false,
	style,
	children,
	...props
}: InputProps) {
	const [isFocused, setIsFocused] = useToggle(false);

	const baseStyle = inputVariants({ variant, size });

	const context = useFormControl();

	return (
		<InputProvider
			value={{
				variant,
				size,
				isError,
				isFocused,
				setIsFocused,
				isDisabled,
				isReadOnly,
			}}
		>
			<View
				style={tw.styleWith(
					{
						disabled: isDisabled || !!context.isDisabled,
						focus: isFocused,
						"data-invalid": isError || !!context.isError,
					},
					baseStyle,
					style,
				)}
				{...props}
			>
				{children}
			</View>
		</InputProvider>
	);
}

const TextField = React.forwardRef<TextInput, TextFieldProps>(
	function TextField(
		{
			size,
			style,
			onFocus,
			onBlur,
			onChangeValue,
			isReadOnly,
			isDisabled,
			...props
		},
		ref,
	) {
		const context = useInput();
		const fieldStyle = inputFieldVariants({ size: size || context.size });

		const handleFocus = (e: any) => {
			if (!context.isDisabled) {
				context.setIsFocused?.(true);
				onFocus?.(e);
			}
		};

		const handleBlur = (e: any) => {
			context.setIsFocused?.(false);
			onBlur?.(e);
		};

		const actualIsDisabled =
			isDisabled !== undefined ? isDisabled : context.isDisabled;
		const actualIsReadOnly =
			actualIsDisabled ||
			(isReadOnly !== undefined ? isReadOnly : context.isReadOnly);

		return (
			<TextInput
				ref={ref}
				style={{ ...tw.style(fieldStyle, style), outline: "none" }}
				placeholderTextColor={tw.color(
					"text-light-onSurfaceVariant/60 dark:text-dark-onSurfaceVariant/60",
				)}
				scrollEnabled={false}
				aria-disabled={
					isDisabled !== undefined ? isDisabled : context.isDisabled
				}
				readOnly={actualIsReadOnly}
				editable={!actualIsDisabled}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onChangeText={onChangeValue}
				{...props}
			/>
		);
	},
);

const NumberField = React.forwardRef<TextInput, NumberFieldProps>(
	function NumberField({ value, defaultValue, onChangeValue, ...props }, ref) {
		const [internalText, setInternalText] = useState(
			defaultValue !== undefined ? String(defaultValue) : "",
		);

		const handleChangeText = (text: string) => {
			const numericText = text.replace(/[^0-9]/g, "");

			setInternalText(numericText);

			if (numericText === "") {
				onChangeValue?.(null);
				return;
			}

			const numValue = Number.parseInt(numericText, 10);
			onChangeValue?.(numValue);
		};

		const textValue = value !== undefined ? String(value) : internalText;
		return (
			<TextField
				ref={ref}
				value={textValue}
				onChangeValue={handleChangeText}
				{...props}
			/>
		);
	},
);

const Textarea = React.forwardRef<TextInput, TextareaProps>(function Textarea(
	{ value, ...props },
	ref,
) {
	return (
		<TextField ref={ref} value={value} multiline scrollEnabled {...props} />
	);
});

function InputSlot({ style, children, ...props }: InputSlotProps) {
	const slotStyle = inputSlotVariants({});

	return (
		<Pressable style={tw.style(slotStyle, style)} {...props}>
			{children}
		</Pressable>
	);
}

function InputIcon({ as: IconComponent, style }: InputIconProps) {
	const context = useInput();

	const color = tw.color(
		inputIconVariants({
			state: context.isError
				? "error"
				: context.isFocused
					? "focused"
					: "default",
		}),
	);

	return <IconComponent size={20} color={color} style={style} />;
}

export const Input = Object.assign(InputRoot, {
	TextField: TextField,
	NumberField: NumberField,
	Textarea: Textarea,
	Slot: InputSlot,
	Icon: InputIcon,
});
