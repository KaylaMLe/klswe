import { CSSObject, keyframes } from '@emotion/react';
import { sansSerifStack } from '../../fontStacks';

export const pageStyle: CSSObject = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100vw',
	minHeight: '100vh',
};

export const sweepGradientKeyframes = keyframes`
0% {
	background-position: 400% 50%;
}
100% {
	background-position: 0% 50%;
}
`;

export const gradientWrapperStyle: CSSObject = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	zIndex: -2,
};

export const gradientBackgroundStyle: CSSObject = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '400%',
	height: '100%',
	backgroundSize: '400% 100%',
};

export const blueSweepStyle: CSSObject = {
	background: 'linear-gradient(120deg, transparent 0%, transparent 20%,rgb(12, 0, 67) 50%, transparent 80%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 90s linear infinite`,
};

export const purpleSweepStyle: CSSObject = {
	background: 'linear-gradient(210deg, transparent 0%, transparent 25%,rgba(34, 0, 67, 0.65) 50%, transparent 75%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 100s linear infinite`,
};

export const starStyle: CSSObject = {
	position: 'absolute',
	backgroundColor: 'white',
	borderRadius: '50%',
	opacity: 0,
	transition: 'opacity 1s ease-in-out',
	boxShadow: '0 0 4px rgba(255, 255, 255)',
};

export const starBoxStyle: CSSObject = {
	position: 'absolute',
	top: '0px',
	left: '0px',
	width: '100vw',
	height: '105vmin',
	maxHeight: '100vh',
	overflow: 'hidden',
	zIndex: -1,
};

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
	fontFamily: 'Space Grotesk, ' + sansSerifStack,
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

export const aboutMeBoxStyle: CSSObject = {
	display: 'grid',
	gridTemplateColumns: '1fr',
	gridTemplateRows: '1fr',
	placeItems: 'center',
	margin: '3rem',
	maxWidth: '800px',
	fontFamily: 'Quicksand, "Arial Rounded MT Light", ' + sansSerifStack,
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
