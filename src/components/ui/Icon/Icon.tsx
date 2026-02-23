import { Pressable } from "react-native";
import tw from "../twrnc.config";
import type { IconActionProps, IconProps } from "./types";
import { iconActionVariants, iconVariants } from "./variants";

const IconSize = {
	sm: 14,
	md: 16,
	lg: 18,
} as const;

function IconRoot({
	as: IconComponent,
	size: sizeProp,
	color,
	style: styleProp,
	...props
}: IconProps) {
	const iconStyle = iconVariants({ size: sizeProp, color });
	console.log(sizeProp);
	const size = IconSize[sizeProp || "md"];

	return <IconComponent size={size} style={tw.style(iconStyle, styleProp)} />;
}

function IconActionRoot(props: IconActionProps) {
	const {
		as: IconComponent,
		style: styleProp,
		variant,
		size,
		action,
		...rest
	} = props;
	const style = iconActionVariants({ variant, size, action });
	return (
		<Pressable
			{...rest}
			style={({ hovered, pressed }) =>
				tw.styleWith(
					{
						hover: hovered,
						active: pressed,
						disabled: !!rest.disabled,
					},
					style,
					styleProp,
				)
			}
		>
			<IconComponent />
		</Pressable>
	);
}

export const Icon = Object.assign(IconRoot, { IconAction: IconActionRoot });
