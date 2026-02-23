import tw from "../twrnc.config";
import { TextProps } from "./types";
import { textVariants } from "./variants";

export function Text({
	size = "md",
	weight,
	color,
	style,
	children,
	as: element,
	...props
}: TextProps) {
	const { lineHeight, ...restStyle } = style || {};
	const defaultStyle = textVariants({ size, weight, color });
	const lineHeightStyles: Record<string, string> = {
		xs: "1rem",
		sm: "1.25rem",
		md: "1.5rem",
		lg: "1.75rem",
		xl: "1.75rem",
	};
	const Element = element || "p";
	return (
		<Element
			style={tw.style(
				defaultStyle,
				{
					margin: 0,
					lineHeight: size ? lineHeightStyles[size] : "1.5rem",
				},
				restStyle,
			)}
			{...props}
		>
			{children}
		</Element>
	);
}
