import { CSSObject, keyframes } from '@emotion/react';

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

export const sweepGradientKeyframes = keyframes`
0% {
	background-position: 400% 50%;
}
100% {
	background-position: 0% 50%;
}
`;

export const blueSweepStyle: CSSObject = {
	background: 'linear-gradient(120deg, transparent 0%, transparent 20%,rgb(12, 0, 67) 50%, transparent 80%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 90s linear infinite`,
};

export const purpleSweepStyle: CSSObject = {
	background: 'linear-gradient(210deg, transparent 0%, transparent 25%,rgba(34, 0, 67, 0.65) 50%, transparent 75%, transparent 100%)',
	animation: `${sweepGradientKeyframes} 100s linear infinite reverse`,
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
