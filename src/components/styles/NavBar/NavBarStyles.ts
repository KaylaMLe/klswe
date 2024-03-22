import { ResponsiveNavStyles } from '../../ResponsiveComponents/ResponsiveNavComponent';

export const navBarStyles: ResponsiveNavStyles = {
	default: {
		color: '#1A2131',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
	},
	mobile: {
		flexDirection: 'column',
		justifyContent: 'center',
	},
	home: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: '',
		height: '100%',
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
		width: '100%',
	},
	home: {
		justifyContent: 'flex-start',
		width: '100%',
	},
};
