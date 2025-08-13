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
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};
