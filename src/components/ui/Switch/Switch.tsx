import { useEffect, useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";
import { Text } from "../Text/Text";
import tw from "../twrnc.config";
import type { SwitchProps } from "./types";
import { switchThumbVariants, switchTrackVariants } from "./variants";

function Switch({
	checked,
	defaultChecked = false,
	onCheckedChange,
	disabled = false,
	style,
	label,
}: SwitchProps) {
	const [internalChecked, setInternalChecked] = useState(defaultChecked);
	const animatedValue = useRef(
		new Animated.Value(defaultChecked ? 1 : 0),
	).current;

	const isChecked = checked !== undefined ? checked : internalChecked;

	useEffect(() => {
		Animated.spring(animatedValue, {
			toValue: isChecked ? 1 : 0,
			useNativeDriver: false,
			damping: 15,
			stiffness: 150,
		}).start();
	}, [isChecked, animatedValue]);

	const handlePress = () => {
		if (disabled) return;

		const newChecked = !isChecked;
		if (checked === undefined) {
			setInternalChecked(newChecked);
		}
		onCheckedChange?.(newChecked);
	};

	const trackStyle = switchTrackVariants({
		checked: isChecked,
		disabled,
	});

	const thumbStyle = switchThumbVariants({
		checked: isChecked,
		disabled,
	});

	const thumbTranslateX = animatedValue.interpolate({
		inputRange: [0, 1],
		outputRange: [4, 24],
	});

	const thumbScale = animatedValue.interpolate({
		inputRange: [0, 0.5, 1],
		outputRange: [1, 1.15, 1],
	});

	return (
		<Pressable
			onPress={handlePress}
			disabled={disabled}
			style={
				label ? tw`flex-row items-center gap-2` : tw.style(trackStyle, style)
			}
		>
			{label ? (
				<>
					<View style={tw.style(trackStyle, style)}>
						<Animated.View
							style={[
								tw.style(thumbStyle),
								{
									transform: [
										{ translateX: thumbTranslateX },
										{ scale: thumbScale },
									],
								},
							]}
						/>
					</View>
					<Text
						as="label"
						style={tw.style(
							"text-base",
							disabled
								? "text-light-onSurface/38 dark:text-dark-onSurface/38"
								: "text-light-onSurface dark:text-dark-onSurface",
						)}
					>
						{label}
					</Text>
				</>
			) : (
				<Animated.View
					style={[
						tw.style(thumbStyle),
						{
							transform: [
								{ translateX: thumbTranslateX },
								{ scale: thumbScale },
							],
						},
					]}
				/>
			)}
		</Pressable>
	);
}

export { Switch };
