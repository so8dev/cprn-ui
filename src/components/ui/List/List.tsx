import { forwardRef } from "react";
import { Pressable, Text as RNText, View } from "react-native";
import tw from "../twrnc.config";
import type {
	ListItemButtonProps,
	ListItemIconProps,
	ListItemProps,
	ListItemTextProps,
	ListProps,
} from "./types";
import {
	listItemButtonVariants,
	listItemIconVariants,
	listItemTextVariants,
	listItemVariants,
	listVariants,
} from "./variants";

const ListRoot = forwardRef<View, ListProps>(
	({ style, children, ...props }, ref) => {
		return (
			<View ref={ref} style={tw.style(listVariants(), style)} {...props}>
				{children}
			</View>
		);
	},
);

const ListItem = forwardRef<View, ListItemProps>(
	({ style, children, ...props }, ref) => {
		return (
			<View ref={ref} style={tw.style(listItemVariants(), style)} {...props}>
				{children}
			</View>
		);
	},
);

const ListItemButton = forwardRef<View, ListItemButtonProps>(
	({ style, children, ...props }, ref) => {
		return (
			<Pressable
				ref={ref}
				style={({ hovered }) =>
					tw.styleWith({ hover: hovered }, listItemButtonVariants(), style)
				}
				{...props}
			>
				{children}
			</Pressable>
		);
	},
);

const ListItemText = forwardRef<RNText, ListItemTextProps>(
	({ style, primary, children, ...props }, ref) => {
		return (
			<RNText
				ref={ref}
				style={tw.style(listItemTextVariants({ primary }), style)}
				{...props}
			>
				{children}
			</RNText>
		);
	},
);

const ListItemIcon = forwardRef<RNText, ListItemIconProps>(
	({ style, as: Icon, children, ...props }, ref) => {
		const classes = listItemIconVariants();

		if (Icon) {
			return (
				<View style={tw.style("flex-shrink-0")}>
					<RNText ref={ref} style={tw.style(classes, style)} {...props}>
						<Icon />
					</RNText>
				</View>
			);
		}

		return (
			<RNText ref={ref} style={tw.style(classes, style)} {...props}>
				{children}
			</RNText>
		);
	},
);

export const List = Object.assign(ListRoot, {
	Item: ListItem,
	ItemButton: ListItemButton,
	ItemText: ListItemText,
	ItemIcon: ListItemIcon,
});
