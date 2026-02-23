import React from "react";
import { View } from "react-native";
import { InputState } from "../Input/types";
import { Text } from "../Text/Text";
import tw from "../twrnc.config";
import { FormControlProvider, useFormControl } from "./context";
import {
	FormControlErrorTextProps,
	FormControlHelperTextProps,
	FormControlLabelProps,
	FormControlProps,
} from "./types";
import {
	formControlErrorTextVariants,
	formControlHelperTextVariants,
	formControlLabelVariants,
	formControlVariants,
} from "./variants";

function FormControlRoot({
	isRequired,
	isError,
	isDisabled,
	isReadOnly,
	style,
	children,
	...props
}: FormControlProps) {
	const defaultStyle = formControlVariants({
		isRequired,
		isError,
		isDisabled,
		isReadOnly,
	});

	return (
		<FormControlProvider
			value={{ isRequired, isError, isDisabled, isReadOnly }}
		>
			<View style={tw.style(defaultStyle, style)} {...props}>
				{React.Children.map(children, (child) => {
					if (React.isValidElement<InputState>(child)) {
						return React.cloneElement<InputState>(child, {
							isDisabled: isDisabled || child.props.isDisabled,
							isError: isError || child.props.isError,
							isReadOnly: isReadOnly || child.props.isReadOnly,
							...child.props,
						});
					}
					return child;
				})}
			</View>
		</FormControlProvider>
	);
}

export function FormControlLabel({
	style,
	children,
	...props
}: FormControlLabelProps) {
	const { isError, isDisabled, isRequired } = useFormControl();

	const defaultStyle = formControlLabelVariants({
		isError,
		isDisabled,
	});

	return (
		<Text as="label" size="sm" style={tw.style(defaultStyle, style)} {...props}>
			{children}
			{isRequired && (
				<Text as="span" style={tw.style(defaultStyle, style)}>
					*
				</Text>
			)}
		</Text>
	);
}

export function FormControlHelperText({
	style,
	children,
	...props
}: FormControlHelperTextProps) {
	const { isError, isDisabled } = useFormControl();

	const defaultStyle = formControlHelperTextVariants({
		isError,
		isDisabled,
	});

	if (isError) {
		return null;
	}

	return (
		<Text size="xs" style={tw.style(defaultStyle, style)} {...props}>
			{children}
		</Text>
	);
}

export function FormControlErrorText({
	style,
	children,
	...props
}: FormControlErrorTextProps) {
	const { isDisabled, isError } = useFormControl();

	if (!isError) {
		return null;
	}

	const defaultStyle = formControlErrorTextVariants({
		isDisabled,
	});

	return (
		<Text style={tw.style(defaultStyle, style)} {...props}>
			{children}
		</Text>
	);
}

export const FormControl = Object.assign(FormControlRoot, {
	Label: FormControlLabel,
	HelperText: FormControlHelperText,
	ErrorText: FormControlErrorText,
});
