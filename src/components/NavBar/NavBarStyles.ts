import { DynamicStyles, ResponsiveNavStyles } from '../../types/StyleTypes';

export const navBarStyles: ResponsiveNavStyles = {
	default: {
		color: '#1A2131',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	mobile: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	home: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: '',
		height: '100%',
	},
};

export const btnRowStyles: ResponsiveNavStyles = {
	default: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		width: '50%',
	},
	mobile: {
		justifyContent: 'center',
		width: '100%',
	},
	home: {
		justifyContent: 'flex-start',
		width: '100%',
	},
};

export const aboutMeBtnStyles: DynamicStyles = {
	default: {
		backgroundColor: '#03030D',
		color: '#11D45C',
		textDecoration: 'none',
		fontSize: '1.5rem',
		borderRadius: '0rem',
		boxSizing: 'border-box',
		padding: '0.75rem',
		marginRight: '0.1rem',
	},
	alternate: {
		backgroundColor: '#11D45C',
		color: '#03030D',
		borderRadius: '0.75rem'
	},
};

export const flexboxFunBtnStyles: DynamicStyles = {
	default: {
		backgroundColor: '#009483',
		color: '#03030D',
		textDecoration: 'none',
		textAlign: 'center',
		borderRadius: '0.5rem',
		boxSizing: 'border-box',
		padding: '0.25rem',
		display: 'block',
		width: '100%',
	},
	alternate: {
		backgroundColor: '#42FFE9',
		color: '#03030D',
	},
};