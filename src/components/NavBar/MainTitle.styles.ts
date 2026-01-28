import { DynamicStyles } from '../../types/StyleTypes';

export const hexagonBoxStyles: DynamicStyles = {
	default: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		zIndex: 0,
		top: '1rem',
		left: '1rem',
		transform: 'scale(0.9)',
		transformOrigin: 'top left',
		transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
	},
	alternate: {},
	home: {
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: '1fr',
		height: '100vmin',
		width: 'auto',
		top: 'auto',
		left: 'auto',
		transform: 'none',
		transformOrigin: 'center center',
	},
};

export const hexagonSvgStyles: DynamicStyles = {
	default: {
		height: '12rem', // Taller to appear wider after 90deg rotation
		width: '3rem', // Narrower to appear taller after 90deg rotation
		objectFit: 'contain',
		transform: 'rotate(90deg)',
		transformOrigin: 'center center',
		transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
		alignSelf: 'flex-start',
		justifySelf: 'flex-start',
	},
	alternate: {},
	home: {
		gridColumn: '1',
		gridRow: '1',
		height: '100%',
		width: '100%',
		transform: 'none',
		alignSelf: 'center',
		justifySelf: 'center',
	},
};

export const heroTextStyles: DynamicStyles = {
	default: {
		gridColumn: '1',
		gridRow: '1',
		zIndex: 2,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		fontFamily: 'Space Grotesk, var(--font-sans-serif)',
		alignSelf: 'flex-start',
		justifySelf: 'flex-start',
		height: 'auto',
		width: 'auto',
		transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
		paddingLeft: '0.25rem',
		paddingTop: '0.25rem',
	},
	alternate: {},
	home: {
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
		transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
		transition: 'opacity 0.4s ease-out, height 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
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
		transition: 'opacity 0.4s ease-out, height 0.6s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
		marginTop: '2rem',
	},
};
