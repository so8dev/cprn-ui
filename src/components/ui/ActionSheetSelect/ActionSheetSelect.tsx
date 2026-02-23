import { ChevronDown } from "lucide-react-native";
import React, { useCallback, useState } from "react";
import { Pressable, Text } from "react-native";
import { useToggle } from "@/hooks/useToggle";
import { ActionSheet } from "../ActionSheet/ActionSheet";
import { useActionSheet } from "../ActionSheet/context";
import { Input } from "../Input/Input";
import tw from "../twrnc.config";
import { SelectProvider, useSelect } from "./context";
import type {
	SelectContentProps,
	SelectOptionProps,
	SelectProps,
	SelectTriggerProps,
	SelectValueProps,
} from "./types";

// Root Component
function SelectRoot({
	children,
	value,
	defaultValue,
	onChange,
	variant = "outlined",
	state,
	disabled = false,
}: SelectProps) {
	const [open, toggleOpen] = useToggle(false);
	const [internalValue, setInternalValue] = useState(defaultValue || "");
	const optionsMapRef = React.useRef<Map<string, string>>(new Map());

	const currentValue = value !== undefined ? value : internalValue;

	const handleValueChange = (newValue: string) => {
		if (value === undefined) {
			setInternalValue(newValue);
		}
		onChange?.(newValue);
	};

	const registerOption = useCallback((optionValue: string, label: string) => {
		optionsMapRef.current.set(optionValue, label);
	}, []);

	const getLabel = useCallback((optionValue: string) => {
		return optionsMapRef.current.get(optionValue);
	}, []);

	return (
		<SelectProvider
			value={{
				value: currentValue,
				onChange: handleValueChange,
				variant,
				state,
				disabled,
				open,
				toggleOpen,
				registerOption,
				getLabel,
			}}
		>
			{children}
		</SelectProvider>
	);
}

// Trigger Component
function SelectTrigger({
	children,
	style,
	placeholder,
	...props
}: SelectTriggerProps) {
	const { disabled, toggleOpen } = useSelect();

	return (
		<Pressable onPress={toggleOpen} disabled={disabled} {...props}>
			{children}
		</Pressable>
	);
}

// Value Component
function SelectInput({ placeholder }: SelectValueProps) {
	const { value, toggleOpen, disabled, getLabel } = useSelect();

	const displayText = value ? getLabel(value) || value : placeholder;

	return (
		<Input>
			<Input.TextField
				isDisabled={disabled}
				placeholder={placeholder}
				value={displayText}
			/>
			<Input.Slot onPress={toggleOpen}>
				<Input.Icon as={ChevronDown} />
			</Input.Slot>
		</Input>
	);
}

// Content Component
function SelectPortal({ children }: SelectContentProps) {
	const { open, toggleOpen } = useSelect();
	return (
		<ActionSheet show={open} onClose={toggleOpen}>
			{children}
		</ActionSheet>
	);
}
// Content Component
function SelectContent({ children, title }: SelectContentProps) {
	return <ActionSheet.Content title={title}>{children}</ActionSheet.Content>;
}

// Option Component
function SelectItem({
	value: optionValue,
	label,
	closeOnSelect = true,
	...props
}: SelectOptionProps) {
	const { value: selectedValue, onChange, registerOption } = useSelect();
	const { close } = useActionSheet();

	// Register this option
	React.useEffect(() => {
		registerOption(optionValue, label);
	}, [optionValue, label, registerOption]);

	const isSelected = selectedValue === optionValue;

	const handlePress = () => {
		onChange(optionValue);
		if (closeOnSelect) {
			close?.();
		}
	};

	return (
		<Pressable
			onPress={handlePress}
			style={(c) =>
				tw.style(
					"px-4 py-3 border-b border-light-outlineVariant/50 dark:border-dark-outlineVariant/50",
					isSelected &&
						"bg-light-primaryContainer dark:bg-dark-primaryContainer",
					(c.hovered || c.pressed) &&
						"bg-light-surfaceVariant dark:bg-dark-surfaceVariant",
				)
			}
			{...props}
		>
			<Text
				style={tw.style(
					"text-base",
					isSelected
						? "text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer font-semibold"
						: "text-light-onSurface dark:text-dark-onSurface",
				)}
			>
				{label}
			</Text>
		</Pressable>
	);
}

export const ActionSheetSelect = Object.assign(SelectRoot, {
	Trigger: SelectTrigger,
	Input: SelectInput,
	Portal: SelectPortal,
	Content: SelectContent,
	Item: SelectItem,
});
