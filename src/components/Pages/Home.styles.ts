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
  width: '90vmin',
  height: '90vmin',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '1fr',
};

export const hexagonStyle: CSSObject = {
  height: '100%',
  width: '100%',
  gridColumn: '1',
  gridRow: '1',
  clipPath: 'polygon(50% 0%, 100% 24.5%, 100% 75.5%, 50% 100%, 0% 75.5%, 0% 24.5%)',
  backgroundColor: '#010014',
};
