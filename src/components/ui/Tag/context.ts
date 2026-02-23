import { createContext, useContext } from "react";

type TagContextValue = {
	variant?: "filled" | "outlined" | "ghost" | null;
	size?: "sm" | "md" | "lg" | null;
};

const TagContext = createContext<TagContextValue | undefined>(undefined);

export const TagProvider = TagContext.Provider;

export function useTag() {
	const context = useContext(TagContext);
	return context || {};
}
