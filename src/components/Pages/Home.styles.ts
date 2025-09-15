import { CSSObject } from '@emotion/react';

export const pageStyle: CSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
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
  margin: '0 0 1rem 0',
};

export const titleStyle: CSSObject = {
  fontWeight: 600,
  fontSize: 'clamp(1.25rem, 6vmin, 15rem)',
  margin: 0,
};

export const subtitleStyle: CSSObject = {
  fontWeight: 400,
  fontSize: 'clamp(1rem, 4vmin, 2rem)',
  marginTop: '1rem',
};
