import {
	Animated,
	KeyboardAvoidingView,
	Modal,
	Text,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import tw from "../twrnc.config";
import { ActionSheetProvider, useActionSheet } from "./context";
import { usePanResponder } from "./hooks";
import type {
	ActionSheetContentProps,
	ActionSheetProps,
	ActionSheetTitleProps,
} from "./types";
import {
	actionSheetBackdropVariants,
	actionSheetContentVariants,
	actionSheetDragHandleVariants,
	actionSheetHeaderVariants,
	actionSheetTitleVariants,
} from "./variants";

// Root Component
function ActionSheetRoot({ children, show, onClose, style }: ActionSheetProps) {
	return (
		<ActionSheetProvider value={{ show, close: onClose }}>
			<Modal
				visible={show}
				transparent
				statusBarTranslucent
				animationType="slide"
				onRequestClose={onClose}
				style={style}
			>
				<KeyboardAvoidingView behavior={"padding"} style={tw`flex-1`}>
					{children}
				</KeyboardAvoidingView>
			</Modal>
		</ActionSheetProvider>
	);
}

// Content Component
function ActionSheetContent({
	title,
	showDragHandle = true,
	maxHeight = "lg",
	children,
}: ActionSheetContentProps) {
	const { show, close } = useActionSheet();
	const { panResponder, translateY } = usePanResponder(close);

	if (!show) {
		return null;
	}

	return (
		<View style={tw.style(actionSheetBackdropVariants())}>
			<TouchableWithoutFeedback onPress={close}>
				<View style={tw`flex-1`} />
			</TouchableWithoutFeedback>
			<Animated.View
				style={[
					tw.style(actionSheetContentVariants({ maxHeight })),
					{ transform: [{ translateY }] },
				]}
			>
				{(showDragHandle || title) && (
					<View
						{...panResponder.panHandlers}
						style={tw.style(actionSheetHeaderVariants())}
					>
						{showDragHandle && (
							<View style={tw.style(actionSheetDragHandleVariants())} />
						)}
						{title && <ActionSheet.Title>{title}</ActionSheet.Title>}
					</View>
				)}
				{children}
			</Animated.View>
		</View>
	);
}

// Backdrop Component
function ActionSheetBackdrop() {
	const { close } = useActionSheet();
	return (
		<TouchableWithoutFeedback onPress={close}>
			<View style={tw`flex-1`} />
		</TouchableWithoutFeedback>
	);
}

// Drag Handle Component
function ActionSheetDragHandle() {
	return <View style={tw.style(actionSheetDragHandleVariants())} />;
}

// Title Component
function ActionSheetTitle({ children }: ActionSheetTitleProps) {
	return <Text style={tw.style(actionSheetTitleVariants())}>{children}</Text>;
}

export const ActionSheet = Object.assign(ActionSheetRoot, {
	Backdrop: ActionSheetBackdrop,
	DragHandle: ActionSheetDragHandle,
	Title: ActionSheetTitle,
	Content: ActionSheetContent,
});
