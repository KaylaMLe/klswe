import { ResponsiveNavStyles } from '../../ResponsiveComponents/ResponsiveNavComponent';

export const navBarStyles: ResponsiveNavStyles = {
	default: {
		color: '#1A2131',
		paddingLeft: '5vw',
		paddingRight: '5vw',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		height: '20%',
		width: '100%',
	},
	mobile: {
		paddingTop: '5vh',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '50%',
	},
	home: {
		paddingTop: '5vh',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: '',
		height: '100%',
		width: '60%',
	},
};

export const btnRowStyles: ResponsiveNavStyles = {
	default: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		width: '50%',
	},
	mobile: {
		justifyContent: 'center',
	},
	home: {
		justifyContent: 'flex-start',
		width: '100%',
	},
};
