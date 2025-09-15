/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

export function Fonts() {
	return (
		<Global
			styles={css`
				@font-face {
					font-family: 'Space Grotesk';
					src: url('/fonts/Space-Grotesk.woff2') format('woff2-variations'),
						url('/fonts/Space-Grotesk.woff2') format('woff2');
					font-weight: 100 900; /* exposes full weight axis */
					font-style: normal;
					font-display: swap;
				}
			`}
		/>
	);
}
