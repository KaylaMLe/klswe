import { ResponsiveNavStyles } from "../../ResponsiveComponents/ResponsiveNavComponent";

export const pageStyles: ResponsiveNavStyles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '100vh',
		width: '100vw',
	},
	mobile: {},
	home: {
		flexDirection: 'row',
		minHeight: '600px',
	},
};