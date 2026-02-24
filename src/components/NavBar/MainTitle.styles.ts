import { DynamicStyles } from '../../types/StyleTypes';

export const hexagonBoxStyles: DynamicStyles = {
	default: {
		marginRight: 'auto',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		zIndex: 0,
		transform: 'scale(0.9)',
		transformOrigin: 'top left',
	},
	alternate: {},
	home: {
		marginRight: 'none',
		top: '1rem',
		left: '1rem',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr',
		height: '100vmin',
		transform: 'none',
	},
};

export const hexagonSvgStyles: DynamicStyles = {
	default: {
		height: '3rem',
		width: '3rem',
		objectFit: 'contain',
		filter: 'brightness(1.5)',
	},
	alternate: {},
	home: {
		filter: 'brightness(1)',
		gridColumn: '1',
		gridRow: '1',
		height: '100%',
		width: '100%',
		alignSelf: 'center',
		justifySelf: 'center',
	},
};

export const heroTextStyles: DynamicStyles = {
	default: {
		zIndex: 1,
		fontFamily: 'Space Grotesk, var(--font-sans-serif)',
		height: 'auto',
		width: 'auto',
		paddingLeft: '0.25rem',
		paddingTop: '0.25rem',
	},
	alternate: {},
	home: {
		gridColumn: '1',
		gridRow: '1',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		justifySelf: 'center',
		height: '85%',
		width: '65%',
		paddingLeft: 0,
		paddingTop: 0,
	},
};

export const nameStyles: DynamicStyles = {
	default: {
		fontWeight: 900,
		fontSize: '3rem',
		margin: 0,
		color: 'white',
		whiteSpace: 'nowrap',
	},
	alternate: {},
	home: {
		color: 'transparent',
		filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))',
		background: 'linear-gradient(180deg, #FFFFFF 0%,rgb(145, 140, 195) 100%)',
		backgroundClip: 'text',
		fontSize: 'clamp(3rem, 12vmin, 20rem)',
		margin: '0 0 2rem 0',
	},
};

export const titleStyles: DynamicStyles = {
	default: {
		display: 'none',
	},
	alternate: {},
	home: {
		display: 'auto',
		fontWeight: 600,
		fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
		color: '#B6ADFF',
		lineHeight: '1.25',
		letterSpacing: '0.1em',
		margin: 0,
		textShadow: '0 0 3px #B6ADFF',
		overflow: 'hidden',
		textAlign: 'center',
	},
};

export const subtitleStyles: DynamicStyles = {
	default: {
		display: 'none',
	},
	alternate: {},
	home: {
		display: 'auto',
		fontWeight: 500,
		fontSize: 'clamp(1rem, 4vmin, 2rem)',
		color: '#8575FF',
		textShadow: '0 0 2px rgba(148, 134, 255, 0.9)',
		overflow: 'hidden',
		marginTop: '2rem',
	},
};
