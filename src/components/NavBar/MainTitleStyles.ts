import { ResponsiveNavStyles } from '../../types/StyleTypes';

export const titleStyles: ResponsiveNavStyles = {
	default: {
		color: '#2FC5CC',
		fontFamily: 'Courier New',
		textAlign: 'left',
	},
	alternate: {
		textAlign: 'center',
	},
	home: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
};

export const linkStyles: ResponsiveNavStyles = {
	default: {
		textDecoration: 'none',
		color: '#2FC5CC',
		fontSize: '2rem',
		transition: 'font-size 0.5s ease-in-out',
	},
	alternate: {},
	home: {
		fontSize: 'clamp(4rem, 6rem, 11vmin)',
	},
};
