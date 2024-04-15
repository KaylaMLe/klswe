import { DynamicStyles, ResponsiveNavStyles } from '../../types/StyleTypes';

export const ddBtnStyles: DynamicStyles = {
	default: {
		backgroundColor: '#03030D',
		color: '#009483',
		border: 'none',
		borderRadius: '0rem',
		fontSize: '1.5rem',
		boxSizing: 'border-box',
		padding: '0.75rem',
		display: 'flex',
		alignItems: 'center',
	},
	alternate: {
		backgroundColor: '#009483',
		color: '#03030D',
		borderRadius: '0.5rem',
	},
};

export const ddContainerStyles: ResponsiveNavStyles = {
	default: {
		position: 'relative',
		marginLeft: '0.1rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'end',
	},
	mobile: {},
	home: {
		alignItems: 'start',
	},
};

