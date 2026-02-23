import { Pressable, Text, View } from "react-native";
import tw from "../twrnc.config";
import type { FABProps } from "./types";
import { fabVariants } from "./variants";

export function FAB({
	variant = "primary",
	size = "medium",
	placement,
	icon: Icon,
	label,
	style,
	onPress,
	disabled = false,
	...props
}: FABProps) {
	const fabStyle = fabVariants({
		variant,
		size,
		extended: !!label,
		placement: placement || "none",
	});

	return (
		<Pressable
			onPress={onPress}
			disabled={disabled}
			style={({ hovered, pressed }) => {
				const hoverStyle = hovered && !disabled ? "opacity-90" : "";
				const pressStyle = pressed && !disabled ? "opacity-75 scale-95" : "";
				const disabledStyle = disabled ? "opacity-38" : "";
				return tw.style(fabStyle, hoverStyle, pressStyle, disabledStyle, style);
			}}
			{...props}
		>
			<View style={tw`flex-row items-center gap-2`}>
				{Icon && <Icon />}
				{label && (
					<Text
						style={tw.style(
							"font-medium",
							size === "small" ? "text-sm" : "text-base",
							variant === "primary"
								? "text-light-onPrimaryContainer dark:text-dark-onPrimaryContainer"
								: variant === "secondary"
									? "text-light-onSecondaryContainer dark:text-dark-onSecondaryContainer"
									: variant === "tertiary"
										? "text-light-onTertiaryContainer dark:text-dark-onTertiaryContainer"
										: "text-light-primary dark:text-dark-primary",
						)}
					>
						{label}
					</Text>
				)}
			</View>
		</Pressable>
	);
}
