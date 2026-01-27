import { CSSObject } from '@emotion/react';

export const hexagonBoxStyle: CSSObject = {
	width: '100vmin',
	height: '100vmin',
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '1fr',
	zIndex: 0,
};

export const hexagonSvgStyle: CSSObject = {
	height: '100%',
	width: '100%',
	objectFit: 'contain',
	gridColumn: '1',
	gridRow: '1',
};

export const heroTextStyle: CSSObject = {
	gridColumn: '1',
	gridRow: '1',
	zIndex: 2,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	fontFamily: 'Space Grotesk, var(--font-sans-serif)',
	alignSelf: 'center',
	justifySelf: 'center',
	height: '85%',
	width: '65%',
};

export const nameStyle: CSSObject = {
	fontWeight: 900,
	fontSize: 'clamp(3rem, 12vmin, 20rem)',
	margin: '0 0 2rem 0',
	color: 'transparent',
	filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.6))',
	background: 'linear-gradient(180deg, #FFFFFF 0%,rgb(145, 140, 195) 100%)',
	backgroundClip: 'text',
};

export const titleStyle: CSSObject = {
	fontWeight: 600,
	fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
	color: '#B6ADFF',
	lineHeight: '1.25',
	letterSpacing: '0.1em',
	textAlign: 'center',
	margin: 0,
	textShadow: '0 0 3px #B6ADFF',
};

export const subtitleStyle: CSSObject = {
	fontWeight: 500,
	fontSize: 'clamp(1rem, 4vmin, 2rem)',
	color: '#8575FF',
	marginTop: '2rem',
	textShadow: '0 0 2px rgba(148, 134, 255, 0.9)'
};
