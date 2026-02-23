import { useRef } from "react";
import { Animated, PanResponder } from "react-native";

export function usePanResponder(close?: () => void) {
	const translateY = useRef(new Animated.Value(0)).current;

	const panResponder = useRef(
		PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onMoveShouldSetPanResponder: (_, gestureState) => {
				// 縦方向のドラッグのみ反応
				return Math.abs(gestureState.dy) > 5;
			},
			onPanResponderMove: (_, gestureState) => {
				// 下方向のドラッグのみ許可
				if (gestureState.dy > 0) {
					translateY.setValue(gestureState.dy);
				}
			},
			onPanResponderRelease: (_, gestureState) => {
				if (gestureState.dy > 100) {
					Animated.timing(translateY, {
						toValue: 500,
						duration: 200,
						useNativeDriver: true,
					}).start(close);
				} else {
					// 元の位置に戻す
					Animated.spring(translateY, {
						toValue: 0,
						useNativeDriver: true,
					}).start();
				}
			},
		}),
	).current;

	return { panResponder, translateY };
}
