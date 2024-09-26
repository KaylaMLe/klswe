import { CSSObject } from '@emotion/css';
import { DynamicStyles } from '../../types/StyleTypes';

export const aboutMeStyles: DynamicStyles = {
	default: {
		color: '#CCCCFF',
		display: 'grid',
		gap: '5vmin',
		gridTemplateColumns: 'auto 1fr',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
	alternate: {
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto 1fr',
		alignItems: 'flex-start',
	},
};

export const paragraphBoxStyle: CSSObject = {
	display: 'flex',
	flexDirection: 'column',
	color: '#9FE6EA',
	boxSizing: 'border-box',
	gap: '5vmin',
	paddingBottom: '5vmin',
};

export const paragraphStyle: CSSObject = {
	margin: 0,
};

export const portraitStyle: CSSObject = {
	borderRadius: '50%',
	height: '50vmin',
	maxHeight: '300px',
	width: '50vmin',
	maxWidth: '300px',
	justifySelf: 'center',
};
