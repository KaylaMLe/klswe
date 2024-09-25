import { DynamicStyles } from './StyleTypes';

export interface ResponsiveProps extends React.HTMLAttributes<HTMLElement> {
	Component: React.ElementType;
	styles: DynamicStyles;
	[prop: string]: any;
}

export interface ToggleProps extends ResponsiveProps {
	label?: string;
	condition: boolean;
}
