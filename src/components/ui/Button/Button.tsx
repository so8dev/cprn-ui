import React from "react";
import { Pressable, View } from "react-native";
import { Icon } from "../Icon/Icon";
import { Text } from "../Text/Text";
import tw from "../twrnc.config";
import { ButtonProvider, useButton } from "./context";
import {
	ButtonGroupProps,
	ButtonIconProps,
	ButtonProps,
	ButtonTextProps,
} from "./types";
import {
	buttonGroupVariants,
	buttonIconVariants,
	buttonTextVariants,
	buttonVariants,
	groupedButtonVariants,
} from "./variants";

function ButtonRoot({
	variant,
	size,
	action,
	style,
	children,
	isDisabled,
	...props
}: ButtonProps) {
	const defaultStyle = buttonVariants({ variant, size, action });

	return (
		<Pressable
			role="button"
			style={({ hovered, pressed }) => {
				return tw.styleWith(
					{ hover: hovered, active: pressed, disabled: isDisabled },
					defaultStyle,
					typeof style === "function" ? style({ hovered, pressed }) : style,
				);
			}}
			disabled={isDisabled}
			{...props}
		>
			{({ hovered, pressed }) => (
				<ButtonProvider
					value={{
						variant,
						size,
						action,
						isHovered: hovered,
						isPressed: pressed,
						isDisabled,
					}}
				>
					{children}
				</ButtonProvider>
			)}
		</Pressable>
	);
}

function ButtonText({
	size,
	action,
	style,
	children,
	...props
}: ButtonTextProps) {
	const context = useButton();

	const defaultStyle = buttonTextVariants(context);

	return (
		<Text
			size={size}
			as="span"
			style={tw.styleWith(
				{
					hover: context.isHovered,
					active: context.isPressed,
					disabled: context.isDisabled,
				},
				defaultStyle,
				typeof style === "function"
					? style({ hovered: false, pressed: false })
					: style,
			)}
			{...props}
		>
			{children}
		</Text>
	);
}

function ButtonIcon({ size, ...props }: ButtonIconProps) {
	const context = useButton();
	const style = buttonIconVariants({
		size: size || context.size,
		action: context.action,
	});

	return (
		<Icon
			style={tw.styleWith(
				{
					hover: context.isHovered,
					focus: context.isHovered,
					active: context.isPressed,
					disabled: context.isDisabled,
				},
				style,
			)}
			{...props}
		/>
	);
}

function ButtonGroup({
	variant,
	size,
	action,
	style,
	horizontal,
	children,
	isDisabled,
	...props
}: ButtonGroupProps) {
	const groupStyle = buttonGroupVariants({
		horizontal,
	});

	return (
		<View style={tw.style(groupStyle, style)} {...props}>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement<ButtonProps>(child)) return child;

				const isFirst = index === 0;
				const isLast = index === React.Children.count(children) - 1;

				return React.cloneElement<ButtonProps>(child, {
					key: index,
					variant: child.props.variant || variant,
					size: child.props.size || size,
					action: child.props.action || action,
					isDisabled: child.props.isDisabled || isDisabled,
					style: tw.styleWith(
						{
							first: isFirst,
							last: isLast,
							"not-first": !isFirst,
							"not-last": !isLast,
							disabled: child.props.isDisabled,
						},
						groupedButtonVariants({
							horizontal,
							variant: child.props.variant || variant,
						}),
					),
				});
			})}
		</View>
	);
}

export const Button = Object.assign(ButtonRoot, {
	Text: ButtonText,
	Icon: ButtonIcon,
	Group: ButtonGroup,
});
