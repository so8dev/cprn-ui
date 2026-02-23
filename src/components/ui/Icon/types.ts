import type { VariantProps } from "class-variance-authority";
import type { LucideIcon } from "lucide-react-native";
import type { PressableProps, ViewProps } from "react-native";
import { Style } from "twrnc";
import type { iconActionVariants, iconVariants } from "./variants";

export type IconProps = Omit<ViewProps, "children" | "style"> &
	VariantProps<typeof iconVariants> & {
		as: LucideIcon;
		style?: Style;
	};

export type IconActionProps = Omit<PressableProps, "children" | "style"> &
	VariantProps<typeof iconActionVariants> & {
		as: LucideIcon;
		style?: Style;
	};
