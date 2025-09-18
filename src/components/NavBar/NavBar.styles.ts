import { CSSObject } from '@emotion/react';
import { DynamicStyles } from '../../types/StyleTypes';

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

export const btnRowStyles: DynamicStyles = {
	default: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		width: '50%',
	},
	alternate: {
		justifyContent: 'center',
		width: '100%',
	},
	home: {
		justifyContent: 'flex-start',
		width: '100%',
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

export const navBarStyles: DynamicStyles = {
	default: {
		color: '#1A2131',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	alternate: {
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

export const skipStyle: CSSObject = {
	color: 'white',
	backgroundColor: 'black',
	position: 'absolute',
	left: '-100%',
	top: '55px',
	':focus': {
		left: 'auto',
	},
};
