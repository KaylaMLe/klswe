import { ResponsiveStyles } from "../../ResponsiveComponents/ResponsiveComponent";

export const aboutMeStyles: ResponsiveStyles = {
	default: {
		color: '#CCCCFF',
		display: 'grid',
		gap: '5vmin',
		gridTemplateColumns: 'auto 1fr',
		alignItems: 'center',
		height: '100%',
		width: '100%',
	},
	mobile: {
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'auto 1fr',
		alignItems: 'flex-start',
	},
};