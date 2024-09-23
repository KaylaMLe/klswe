import { CSSObject } from '@emotion/css';
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
	alternate: {},
	home: {
		gridTemplateRows: 'auto',
		gridTemplateColumns: '3fr 2fr',
	},
};

export const containerStyles: CSSObject = {
	height: '100vh',
	width: '100vw',
};

export const privacyPolicyLinkStyles: CSSObject = {
	color: '#6B6BDB',
	padding: '5vmin',
};
