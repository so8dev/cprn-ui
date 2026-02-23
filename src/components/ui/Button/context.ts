import { VariantProps } from "class-variance-authority";
import React from "react";
import { ButtonState } from "./types";
import { buttonVariants } from "./variants";

const ButtonContext = React.createContext<
	(VariantProps<typeof buttonVariants> & ButtonState) | undefined
>(undefined);

export const ButtonProvider = ButtonContext.Provider;

export function useButton() {
	const context = React.useContext(ButtonContext);
	if (context === undefined) {
		throw new Error("useButton must be used within a ButtonProvider");
	}
	return context;
}
