import { createContext, useContext } from "react";

type IconActionContextValue = {
	isRequired?: boolean | null;
	isError?: boolean | null;
	isDisabled?: boolean | null;
	isReadOnly?: boolean | null;
};

const IconActionContext = createContext<IconActionContextValue | undefined>(
	undefined,
);

export const IconActionProvider = IconActionContext.Provider;

export function useIconAction() {
	const context = useContext(IconActionContext);
	return context || {};
}
