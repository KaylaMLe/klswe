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