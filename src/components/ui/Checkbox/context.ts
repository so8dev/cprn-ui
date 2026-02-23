import React from "react";

type CheckboxGroupContextValue = {
	value?: string[];
	onChange?: (value: string) => void;
};

const CheckboxGroupContext = React.createContext<
	CheckboxGroupContextValue | undefined
>(undefined);

export const CheckboxGroupProvider = CheckboxGroupContext.Provider;

export function useCheckboxGroup() {
	const context = React.useContext(CheckboxGroupContext);
	return context || {};
}
