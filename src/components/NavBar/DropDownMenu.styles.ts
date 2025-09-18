import { CSSObject } from '@emotion/react';
import { DynamicStyles } from '../../types/StyleTypes';

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

export const ddContainerStyles: DynamicStyles = {
	default: {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'end',
	},
	alternate: {},
	home: {
		alignItems: 'start',
	},
};

export const ddContentStyles: CSSObject = {
	color: '#03030D',
	backgroundColor: '#009483',
	border: 'none',
	borderRadius: '0.5rem',
	width: '275%',
	minWidth: '111px',
	alignItems: 'center',
	position: 'absolute',
	top: '79%',// overlays content on top of drop down button
	zIndex: '1',
};

export const iconStyles: DynamicStyles = {
	default: {
		marginLeft: '4px',
		transform: 'rotate(-90deg)',
		transition: 'transform 0.5s ease',
	},
	alternate: {
		transform: 'rotate(0deg)',
	},
};
