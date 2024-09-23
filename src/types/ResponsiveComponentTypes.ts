import { DynamicStyles, ResponsiveNavStyles } from './StyleTypes';

export interface ResponsiveProps extends React.HTMLAttributes<HTMLElement> {
	Component: React.ElementType;
	styles: DynamicStyles;
	[prop: string]: any;
}

export interface ResponsiveNavProps extends ResponsiveProps {
	styles: ResponsiveNavStyles;
}

export interface ToggleProps extends ResponsiveProps {
	label?: string;
	condition: boolean;
}
