/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export function Fonts() {
	return (
		<Global
			styles={css`
				@font-face {
					font-family: 'Space Grotesk';
					src: url('/fonts/SpaceGrotesk/Space-Grotesk.woff2') format('woff2-variations');
					font-weight: 100 900; /* exposes full weight axis */
					font-style: normal;
					font-display: swap;
				}

				@font-face {
					font-family: 'Inter';
					src: url('/fonts/Inter/Inter.woff2') format('woff2-variations');
					font-weight: 100 900;
					font-style: normal;
					font-display: swap;
				}

				@font-face {
					font-family: 'Inter';
					src: url('/fonts/Inter/Inter-Italic.woff2') format('woff2-variations');
					font-weight: 100 900;
					font-style: italic;
					font-display: swap;
				}
			`}
		/>
	);
}
