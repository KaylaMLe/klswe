import { ResponsiveNavStyles } from '../../types/StyleTypes';

export const pageStyles: ResponsiveNavStyles = {
	default: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		height: '100%',
		width: '100%',
		boxSizing: 'border-box',
		gap: '5vmin',
		padding: '5vmin',
	},
	mobile: {},
	home: {
		gridTemplateRows: 'auto',
		gridTemplateColumns: '3fr 2fr',
	},
};