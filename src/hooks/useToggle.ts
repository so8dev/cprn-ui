import React from "react";

export function useToggle(initialValue: boolean = false) {
	const [value, setValue] = React.useState(initialValue);
	const toggle = () => setValue((prev) => !prev);

	return [value, toggle] as const;
}
