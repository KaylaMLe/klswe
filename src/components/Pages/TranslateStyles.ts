import { DynamicStyles } from '../../types/StyleTypes';

export const formStyles: DynamicStyles = {
	default: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: '1rem',
		height: '100%',
	},
	alternate: {
		width: '80%',
		margin: '0 auto',
	},
};

export const textBoxStyles: DynamicStyles = {
	default: {
		color: 'black',
		fontSize: '1.5rem',
		width: '45%',
		height: '100%',
	},
	alternate: {
		width: '100%',
	},
};

export const submitBtnStyles: DynamicStyles = {
	default: {
		borderColor: '#47DCE2',
		borderRadius: '0.5rem',
		borderStyle: 'solid',
		color: '#47DCE2',
		backgroundColor: 'transparent',
		fontSize: '1.5rem',
		padding: '0.5rem 1rem',
	},
	alternate: {
		width: '100%',
	},
};
