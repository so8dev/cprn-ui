import type { ReactNode } from "react";
import { Style } from "twrnc";

export interface ComponentExampleProps {
	component: string;
	description?: string;
	children: ReactNode;
	style?: Style;
}

export interface ComponentExampleSectionProps {
	title: string;
	description?: string;
	children: ReactNode;
}
