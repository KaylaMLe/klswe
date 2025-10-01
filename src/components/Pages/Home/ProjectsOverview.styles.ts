import { CSSObject } from '@emotion/react';

export const overviewContainerStyle: CSSObject = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	width: '90vw',
	maxWidth: '100vw',
	margin: '2rem auto',
	fontFamily: 'Quicksand, "Arial Rounded MT Light", var(--font-sans-serif)',
};

export const overviewTitleStyle: CSSObject = {
	fontWeight: 550,
	fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
	color: 'rgb(0, 255, 255)',
	lineHeight: '1',
	textAlign: 'center',
	marginTop: 0,
	marginBottom: '0.6rem',
	textShadow: `
		0 0 5px rgba(0, 255, 255, 0.5),
		0 0 10px rgba(0, 143, 143, 0.5)
	`,
};

export const cardsWrapperStyle: CSSObject = {
	position: 'relative',
	width: '100%',
	height: '70vh',
	minHeight: '300px',
	overflow: 'hidden',
	marginBottom: '2rem',
};

export const cardStyle: CSSObject = {
	position: 'absolute',
	top: 0,
	left: 0,
	boxSizing: 'border-box',
	width: '100%',
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	transition: 'all 0.5s ease-in-out',
	background: 'linear-gradient(to bottom, rgba(0,255,255,0.1) 0%, rgba(0,255,255,0.05) 100%)',
	border: '1px solid rgba(255,255,255,0.08)',
	borderRadius: '6px',
	backdropFilter: 'blur(10px)',
	boxShadow: `
		inset 0 1px rgba(255,255,255,0.25),
		inset 0 -1px rgba(0,255,255,0.12)
	`,
	padding: '2rem',
	gap: '2rem',
};

export const mainContentStyle: CSSObject = {
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	flexGrow: 1,
	gap: '2rem',
	[`@media (max-width: 600px)`]: {
		flexDirection: 'column',
	},
};

export const cardImageStyle: CSSObject = {
	height: '100%',
	maxHeight: '50vmin',
	objectFit: 'cover',
};

export const cardTextContainerStyle: CSSObject = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	height: '80%',
};

export const cardTechBubblesStyle: CSSObject = {
	width: '100%',
	display: 'flex',
	flexWrap: 'wrap',
	gap: '0.5rem',
	justifyContent: 'flex-start',
};

export const cardTitleStyle: CSSObject = {
	fontSize: '1.5rem',
	fontWeight: 600,
	color: 'transparent',
	background: 'linear-gradient(180deg, #dfe4ff 0%, #8c8ccf 100%)',
	backgroundClip: 'text',
	margin: '0 0 1rem 0',
	textAlign: 'left',
};

export const cardDescriptionStyle: CSSObject = {
	fontSize: '1rem',
	color: '#B6ADFF',
	lineHeight: '1.6',
	margin: '0 0 1rem 0',
	textAlign: 'left',
	textShadow: '0 0 2px rgba(182, 173, 255, 0.3)',
};

export const navigationContainerStyle: CSSObject = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '2rem',
	width: '100%',
};

export const arrowButtonStyle: CSSObject = {
	background: 'rgba(182, 173, 255, 0.1)',
	border: '1px solid rgba(182, 173, 255, 0.1)',
	borderRadius: '50%',
	width: '48px',
	height: '48px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	cursor: 'pointer',
	transition: 'all 0.3s ease',
	color: '#B6ADFF',

	'&:hover': {
		background: 'rgba(182, 173, 255, 0.2)',
		borderColor: 'rgba(182, 173, 255, 0.5)',
		transform: 'scale(1.05)',
	},

	'&:active': {
		transform: 'scale(0.95)',
	},
};

export const arrowIconStyle: CSSObject = {
	width: '20px',
	height: '20px',
};

export const dotsContainerStyle: CSSObject = {
	display: 'flex',
	gap: '0.75rem',
	alignItems: 'center',
};

export const dotStyle: CSSObject = {
	width: '12px',
	height: '12px',
	borderRadius: '50%',
	background: 'rgba(182, 173, 255, 0.3)',
	border: 'none',
	cursor: 'pointer',
	transition: 'all 0.3s ease',

	'&:hover': {
		background: 'rgba(182, 173, 255, 0.5)',
		transform: 'scale(1.2)',
	},
};

export const activeDotStyle: CSSObject = {
	background: 'linear-gradient(180deg, #dfe4ff 0%, #8c8ccf 100%)',
	boxShadow: '0 0 8px rgba(182, 173, 255, 0.5)',
	transform: 'scale(1.3)',
};
