import { createContext, useContext } from "react";

type FormControlContextValue = {
	isRequired?: boolean | null;
	isError?: boolean | null;
	isDisabled?: boolean | null;
	isReadOnly?: boolean | null;
};

const FormControlContext = createContext<FormControlContextValue | undefined>(
	undefined,
);

export const FormControlProvider = FormControlContext.Provider;

export function useFormControl() {
	const context = useContext(FormControlContext);
	return context || {};
}
