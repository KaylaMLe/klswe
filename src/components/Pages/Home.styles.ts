import { CSSObject } from '@emotion/react';

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
  position: 'absolute',
  top: '0px',
  left: '0px',
  width: '100vw',
  height: '100vh',
};

export const hexagonStyle: CSSObject = {
  position: 'absolute',
  top: '0px',
  left: '0px',
  height: '100%',
  width: '100%',
};
