import { ResponsiveStyles } from "../../ResponsiveComponents/ResponsiveComponent";

export const textBoxStyles: ResponsiveStyles = {
	default: {
		color: '#CCCCFF',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		padding: '1rem',
		height: '100%',
		minHeight: '350px',
	},
	mobile: {
		minHeight: '625px',
	},
};