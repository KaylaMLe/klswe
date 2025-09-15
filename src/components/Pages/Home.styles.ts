import { CSSObject, keyframes } from '@emotion/react';

export const pageStyle: CSSObject = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
};

export const sweepGradientKeyframes = keyframes`
0% {
  background-position: 0% 50%;
}
100% {
  background-position: 400% 50%;
}
`;

export const gradientBackgroundStyle: CSSObject = {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundSize: '400% 100%',
  zIndex: 0,
};

export const blueSweepStyle: CSSObject = {
	background: 'repeating-linear-gradient(120deg, transparent 0%, transparent 20%,rgb(12, 0, 67) 50%, transparent 80%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 90s linear infinite`,
};

export const purpleSweepStyle: CSSObject = {
	background: 'repeating-linear-gradient(210deg, transparent 0%, transparent 25%,rgba(34, 0, 67, 0.7) 50%, transparent 75%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 80s linear infinite`,
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
  height: '100vh',
  overflow: 'hidden',
};

export const hexagonBoxStyle: CSSObject = {
  width: '100vmin',
  height: '100vmin',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
};

export const hexagonSvgStyle: CSSObject = {
  height: '100%',
  width: '100%',
  objectFit: 'contain',
  gridColumn: '1',
  gridRow: '1',
  zIndex: 2,
};

export const heroTextStyle: CSSObject = {
  gridColumn: '1',
  gridRow: '1',
  zIndex: 3,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontFamily: 'Space Grotesk',
  alignSelf: 'center',
  justifySelf: 'center',
  height: '85%',
  width: '65%',
};

export const nameStyle: CSSObject = {
  fontWeight: 900,
  fontSize: 'clamp(3rem, 12vmin, 20rem)',
  margin: '0 0 2rem 0',
};

export const titleStyle: CSSObject = {
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
  color: '#B6ADFF',
  lineHeight: '1.25',
  letterSpacing: '0.1em',
  textAlign: 'center',
  margin: 0,
};

export const subtitleStyle: CSSObject = {
  fontWeight: 500,
  fontSize: 'clamp(1rem, 4vmin, 2rem)',
  color: '#8575FF',
  marginTop: '2rem',
};
