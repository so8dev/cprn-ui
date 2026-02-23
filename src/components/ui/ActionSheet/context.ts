import React from "react";

interface ActionSheetContextType {
	show?: boolean;
	close?: () => void;
}

const ActionSheetContext = React.createContext<
	ActionSheetContextType | undefined
>(undefined);

export const ActionSheetProvider = ActionSheetContext.Provider;

export function useActionSheet() {
	const context = React.useContext(ActionSheetContext);
	if (context === undefined) {
		throw new Error(
			"useActionSheet must be used within an ActionSheet component",
		);
	}
	return context;
}
