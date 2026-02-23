import { VariantProps } from "class-variance-authority";
import React from "react";
import { InputState } from "./types";
import { inputVariants } from "./variants";

type InputContextValue = VariantProps<typeof inputVariants> &
	InputState & {
		isFocused?: boolean;
		setIsFocused?: (isFocused: boolean) => void;
	};

const InputContext = React.createContext<InputContextValue | undefined>(
	undefined,
);

export const InputProvider = InputContext.Provider;

export function useInput() {
	const context = React.useContext(InputContext);
	if (context === undefined) {
		throw new Error("useInput must be used within an InputProvider");
	}
	return context;
}
