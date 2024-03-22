import { ResponsiveStyles } from "../../ResponsiveComponents/ResponsiveComponent";

export const homeStyles: ResponsiveStyles = {
	default: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr',
		alignItems: 'flex-start',
		height: '100%',
		width: '100%',
	},
	mobile: {
		alignItems: 'center',
	},
};

export const treeBoxStyles: ResponsiveStyles = {
	default: {
		position: 'relative',
		background: 'none',
		border: 'none',
		boxSizing: 'border-box',
		paddingTop: '5vmin',
		height: '100%',
		width: '100%',
	},
	mobile: {
		marginRight: '0',
	},
};