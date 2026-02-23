import type { PressableProps } from "react-native";
import { Style } from "twrnc";

export interface ActionSheetProps {
	children: React.ReactNode;
	show?: boolean;
	onClose?: () => void;
	style?: Style;
}

export interface ActionSheetTriggerProps extends PressableProps {
	children: React.ReactNode;
	asChild?: boolean;
}

export interface ActionSheetContentProps {
	title?: string;
	showDragHandle?: boolean;
	maxHeight?: "sm" | "md" | "lg" | "xl" | "full";
	children: React.ReactNode;
}

export interface ActionSheetTitleProps {
	children: React.ReactNode;
}
