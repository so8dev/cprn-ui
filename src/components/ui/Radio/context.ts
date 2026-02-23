import React from "react";

type RadioGroupContextValue = {
	value?: string;
	onChange?: (value: string) => void;
};

const RadioGroupContext = React.createContext<
	RadioGroupContextValue | undefined
>(undefined);

export const RadioGroupProvider = RadioGroupContext.Provider;

export function useRadioGroup() {
	const context = React.useContext(RadioGroupContext);
	return context || {};
}
