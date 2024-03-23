import { DynamicStyles } from '../StyleTypes';

export const homeStyles: DynamicStyles = {
	default: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		alignItems: 'flex-start',
		height: '100%',
		width: '100%',
	},
	alternate: {
		alignItems: 'center',
	},
};

export const treeBoxStyles: DynamicStyles = {
	default: {
		position: 'relative',
		background: 'none',
		border: 'none',
		boxSizing: 'border-box',
		paddingTop: '5vmin',
		height: '100%',
		width: '100%',
	},
	alternate: {
		marginRight: '0',
	},
};