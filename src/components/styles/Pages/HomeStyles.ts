import { ResponsiveStyles } from "../../ResponsiveComponents/ResponsiveComponent";

export const homeStyles: ResponsiveStyles = {
	default: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		height: '100%',
		minHeight: '200px',
		width: '100%',
	},
	mobile: {
		alignItems: 'center',
		minHeight: '600px',
	},
};

export const treeBoxStyles: ResponsiveStyles = {
	default: {
		position: 'relative',
		background: `none`,
		border: 'none',
		display: 'flex',
		height: '80%',
		minHeight: '150px',
		width: '100%',
		marginRight: '5vmin',
		marginTop: '0',
	},
	mobile: {
		marginRight: '0',
		marginTop: '5vw',
	},
};