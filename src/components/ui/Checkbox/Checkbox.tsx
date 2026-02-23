import { Check } from "lucide-react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "../twrnc.config";
import { CheckboxGroupProvider, useCheckboxGroup } from "./context";
import type { CheckboxGroupProps, CheckboxProps } from "./types";
import {
	checkboxGroupVariants,
	checkboxIconVariants,
	checkboxLabelVariants,
	checkboxVariants,
} from "./variants";

function CheckboxRoot({
	value: valueProp,
	checked,
	defaultChecked = false,
	onChange,
	disabled = false,
	label,
	style,
}: CheckboxProps) {
	const [internalChecked, setInternalChecked] = useState(
		checked || defaultChecked,
	);

	const context = useCheckboxGroup();

	const isChecked =
		checked !== undefined
			? checked
			: (context.value?.includes(valueProp || "") ?? internalChecked);

	const handlePress = () => {
		const newChecked = !isChecked;
		if (checked === undefined) {
			setInternalChecked(newChecked);
		}
		if (valueProp) {
			context.onChange?.(valueProp);
		}

		onChange?.(newChecked);
	};

	const boxStyle = checkboxVariants({
		checked: isChecked,
	});

	const iconStyle = checkboxIconVariants({
		checked: isChecked,
	});

	const labelStyle = checkboxLabelVariants({});

	return (
		<Pressable
			onPress={handlePress}
			disabled={disabled}
			style={tw`flex-row items-center gap-2`}
		>
			<View style={tw.styleWith({ disabled }, boxStyle, style)}>
				<Check style={tw.style(iconStyle)} />
			</View>
			{label && (
				<Text style={tw.styleWith({ disabled }, labelStyle)}>{label}</Text>
			)}
		</Pressable>
	);
}

function CheckboxGroup(props: CheckboxGroupProps) {
	const {
		value: valueProp = [],
		onChange: onChangeProp,
		horizontal,
		style,
		children,
		...rest
	} = props;

	const [value, setValue] = React.useState(valueProp);

	const handleChange = (target: string) => {
		const newValue = value.includes(target)
			? value.filter((val) => val !== target)
			: [...value, target];

		setValue(newValue);
		onChangeProp?.(newValue);
	};

	const defaultStyle = checkboxGroupVariants({ horizontal });

	return (
		<View style={tw.style(defaultStyle, style)} {...rest}>
			<CheckboxGroupProvider value={{ value, onChange: handleChange }}>
				{children}
			</CheckboxGroupProvider>
		</View>
	);
}

export const Checkbox = Object.assign(CheckboxRoot, {
	Group: CheckboxGroup,
});
