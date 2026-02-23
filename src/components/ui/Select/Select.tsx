import { Check, ChevronDown } from "lucide-react-native";
import { useEffect, useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import tw from "../twrnc.config";
import { SelectContext, useSelect } from "./context";
import type {
	SelectContentProps,
	SelectItemProps,
	SelectProps,
	SelectTriggerProps,
	SelectValueProps,
} from "./types";
import {
	selectContentVariants,
	selectItemVariants,
	selectTriggerVariants,
} from "./variants";

function SelectRoot(props: SelectProps) {
	const {
		value: valueProp,
		defaultValue,
		onChange,
		initialLabel,
		open: openProp,
		defaultOpen = false,
		onOpenChange,
		disabled = false,
		children,
	} = props;

	const [internalValue, setInternalValue] = useState<string | undefined>(
		valueProp ?? defaultValue,
	);
	const [internalOpen, setInternalOpen] = useState(openProp ?? defaultOpen);
	const optionsMapRef = useRef<Map<string, string>>(new Map());

	const value = valueProp !== undefined ? valueProp : internalValue;
	const open = openProp !== undefined ? openProp : internalOpen;

	const handleValueChange = (newValue: string) => {
		if (valueProp === undefined) {
			setInternalValue(newValue);
		}
		onChange?.(newValue);
	};

	const handleOpenChange = (newOpen: boolean) => {
		if (openProp === undefined) {
			setInternalOpen(newOpen);
		}
		onOpenChange?.(newOpen);
	};

	const registerOption = (optionValue: string, label: string) => {
		optionsMapRef.current.set(optionValue, label);
	};

	const getLabel = (optionValue: string) => {
		return optionsMapRef.current.get(optionValue) || initialLabel;
	};

	return (
		<SelectContext.Provider
			value={{
				value,
				onChange: handleValueChange,
				open,
				setOpen: handleOpenChange,
				disabled,
				registerOption,
				getLabel,
			}}
		>
			<View style={tw`relative z-20`}>{children}</View>
		</SelectContext.Provider>
	);
}

function SelectTrigger({
	children,
	disabled: disabledProp,
	style,
}: SelectTriggerProps) {
	const { open, setOpen, disabled: contextDisabled } = useSelect();
	const disabled = disabledProp ?? contextDisabled;

	return (
		<Pressable
			onPress={() => !disabled && setOpen(!open)}
			disabled={disabled}
			style={tw.styleWith(
				{ disabled },
				selectTriggerVariants({ disabled }),
				style,
			)}
		>
			<View style={tw`flex-1`}>{children}</View>
			<ChevronDown
				size={16}
				style={tw`ml-2 text-light-onSurface/50 dark:text-dark-onSurface/50`}
			/>
		</Pressable>
	);
}

function SelectInput({ placeholder, style }: SelectValueProps) {
	const { value, getLabel } = useSelect();
	const displayValue = value ? getLabel(value) : undefined;

	return (
		<Text
			style={tw.style(
				"text-sm",
				!displayValue && "text-light-onSurface/50 dark:text-dark-onSurface/50",
				"text-light-onSurface dark:text-dark-onSurface",
				style,
			)}
		>
			{displayValue ?? placeholder}
		</Text>
	);
}

function SelectContent({ children, style }: SelectContentProps) {
	const { open } = useSelect();

	if (!open) return null;

	return (
		<View
			style={tw.styleWith(
				{},
				selectContentVariants(),
				"absolute top-full w-full mt-1",
				style,
			)}
		>
			{children}
		</View>
	);
}

function SelectItem({
	value: itemValue,
	label,
	children,
	disabled,
	style,
}: SelectItemProps) {
	const {
		value: selectedValue,
		onChange,
		setOpen,
		registerOption,
	} = useSelect();

	const isSelected = selectedValue === itemValue;

	useEffect(() => {
		registerOption(itemValue, label);
	}, [itemValue, label, registerOption]);

	const handlePress = () => {
		if (disabled) return;
		onChange?.(itemValue);
		setOpen(false);
	};

	return (
		<Pressable
			onPress={handlePress}
			style={tw.styleWith(
				{ disabled },
				selectItemVariants({ disabled }),
				style,
			)}
		>
			<View style={tw`absolute left-2 flex items-center justify-center`}>
				{isSelected && (
					<Check
						size={14}
						style={tw`text-light-onSurface dark:text-dark-onSurface`}
					/>
				)}
			</View>
			<Text
				style={tw`text-sm font-medium text-light-onSurface dark:text-dark-onSurface`}
			>
				{children ?? label}
			</Text>
		</Pressable>
	);
}

export const Select = Object.assign(SelectRoot, {
	Trigger: SelectTrigger,
	Input: SelectInput,
	Content: SelectContent,
	Item: SelectItem,
});
