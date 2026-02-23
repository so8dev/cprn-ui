import React, { useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { Text } from "../Text/Text";
import tw from "../twrnc.config";
import { RadioGroupProvider, useRadioGroup } from "./context";
import type { RadioGroupProps, RadioProps } from "./types";
import {
	radioGroupVariants,
	radioInnerVariants,
	radioLabelVariants,
	radioVariants,
} from "./variants";

function RadioRoot({
	value: valueProp,
	checked,
	defaultChecked = false,
	onChange,
	disabled = false,
	label,
	style,
}: RadioProps) {
	const [internalChecked, setInternalChecked] = useState(
		checked || defaultChecked,
	);

	const context = useRadioGroup();

	const isChecked =
		checked !== undefined && checked !== null
			? checked
			: valueProp !== undefined && context.value !== undefined
				? context.value === valueProp
				: internalChecked;

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

	const labelStyle = radioLabelVariants({});

	return (
		<Pressable
			onPress={handlePress}
			disabled={disabled}
			style={tw`flex-row items-center gap-2`}
		>
			{({ pressed }) => (
				<>
					<TextInput value={valueProp} style={tw`hidden`} />
					<View
						style={tw.styleWith(
							{ disabled, active: pressed, focus: pressed },
							radioVariants({ checked: isChecked }),
							style,
						)}
					>
						<View
							style={tw.styleWith(
								{ disabled },
								radioInnerVariants({ checked: isChecked }),
							)}
						/>
					</View>
					{label && (
						<Text as="label" style={tw.styleWith({ disabled }, labelStyle)}>
							{label}
						</Text>
					)}
				</>
			)}
		</Pressable>
	);
}

function RadioGroup(props: RadioGroupProps) {
	const {
		value: valueProp,
		onChange: onChangeProp,
		horizontal,
		style,
		children,
		...rest
	} = props;

	const [value, setValue] = React.useState(valueProp);

	const handleChange = (target: string) => {
		setValue(target);
		onChangeProp?.(target);
	};

	const defaultStyle = radioGroupVariants({ horizontal });
	return (
		<View style={tw.style(defaultStyle, style)} {...rest}>
			<RadioGroupProvider value={{ value, onChange: handleChange }}>
				{children}
			</RadioGroupProvider>
		</View>
	);
}

export const Radio = Object.assign(RadioRoot, {
	Group: RadioGroup,
});
