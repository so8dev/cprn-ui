import type { VariantProps } from "class-variance-authority";
import React from "react";
import type { selectVariants } from "./variants";

export type SelectVariantProps = VariantProps<typeof selectVariants>;

interface SelectContextType {
	value: string;
	onChange: (value: string) => void;
	variant?: "outlined" | "filled" | "underlined" | "ghost";
	state?: "error" | "default" | "focused";
	disabled?: boolean;
	open: boolean;
	toggleOpen: () => void;
	registerOption: (value: string, label: string) => void;
	getLabel: (value: string) => string | undefined;
}

const SelectContext = React.createContext<SelectContextType | undefined>(
	undefined,
);

export const SelectProvider = SelectContext.Provider;

export function useSelect() {
	const context = React.useContext(SelectContext);
	if (context === undefined) {
		throw new Error("useSelect must be used within a Select component");
	}
	return context;
}
