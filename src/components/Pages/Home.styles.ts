import { CSSObject } from '@emotion/react';

export const starStyle: CSSObject = {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '50%',
  opacity: 0,
  transition: 'opacity 1s ease-in-out',
};

export const starBoxStyle: CSSObject = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
};
