import React from "react";

export interface SelectContextValue {
	value?: string;
	onChange?: (value: string) => void;
	open: boolean;
	setOpen: (open: boolean) => void;
	disabled?: boolean;
	// Helper to display label for selected value
	registerOption: (value: string, label: string) => void;
	getLabel: (value: string) => string | undefined;
}

export const SelectContext = React.createContext<
	SelectContextValue | undefined
>(undefined);

export function useSelect() {
	const context = React.useContext(SelectContext);
	if (!context) {
		throw new Error("useSelect must be used within a SelectProvider");
	}
	return context;
}
