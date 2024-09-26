import { DynamicStyles } from '../../types/StyleTypes';

export const homeStyles: DynamicStyles = {
	default: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		height: '100%',
		width: '100%',
	},
	alternate: {
		justifyContent: 'center',
	},
};

export const muteBtnStyles: DynamicStyles = {
	default: {
		backgroundColor: '#0A943F',
		border: 'none',
		borderRadius: '2rem',
		fontSize: 'inherit',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		maxWidth: '232px',
		boxSizing: 'border-box',
		padding: '0.75rem',
		justifySelf: 'flex-end',
	},
	alternate: {
		justifySelf: 'center',
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
