import { CSSObject } from '@emotion/react';

export const pageStyle: CSSObject = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	minHeight: '100vh',
};

export const aboutMeBoxStyle: CSSObject = {
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '1fr',
	placeItems: 'center',
	margin: '3rem',
	maxWidth: '800px',
	fontFamily: 'Quicksand, "Arial Rounded MT Light", var(--font-sans-serif)',
};

export const glassBlurStyle: CSSObject = {
	gridColumn: '1',
	gridRow: '1',
	height: '100%',
	width: '100%',
	background: 'linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 100%)',
	borderRadius: '20px',
	filter: 'blur(6px)',
	boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
	zIndex: 1,
};

export const glassPanelStyle: CSSObject = {
	gridColumn: '1',
	gridRow: '1',
	height: '97%',
	width: '97%',
	background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.03) 100%)',
	borderRadius: '12px',
	zIndex: 1,
};

export const aboutMeTextContainerStyle: CSSObject = {
	gridColumn: '1',
	gridRow: '1',
	padding: '2rem 3rem 2rem 3rem',
	display: 'flex',
	flexDirection: 'column',
	zIndex: 2,
};

export const aboutMeTitleStyle: CSSObject = {
	fontWeight: 550,
	fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
	color: 'transparent',
	lineHeight: '1',
	textAlign: 'center',
	marginTop: 0,
	marginBottom: '0.6rem',
	textShadow: `
		0 0 2px rgba(174, 129, 255, 0.6),
		0 0 6px rgba(174, 129, 255, 0.3)
	`,
	background: 'linear-gradient(180deg, #dfe4ff 0%, #8c8ccf 100%)',
	backgroundClip: 'text',
};

export const aboutMeTextStyle: CSSObject = {
	fontWeight: 400,
	fontSize: 'clamp(1rem, 1.25rem, 2rem)',
	color: '#8381FE',
	textShadow: '0 0 2px rgba(131, 129, 254, 0.6)',
	lineHeight: '1.5',
	marginBottom: 0,
	marginTop: '0.6rem',
};
