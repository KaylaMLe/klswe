import { CSSObject } from "@emotion/css";
import { DynamicStyles } from "../../types/StyleTypes";

export const headlineStyle: CSSObject = {
	fontSize: '3rem',
	lineHeight: '1',
	margin: '0',
	boxSizing: 'border-box',
	paddingBottom: '1rem',
};

export const linkStyles: DynamicStyles = {
	default: {
		textDecoration: 'none',
		color: '#2FC5CC',
		fontSize: '2rem',
		transition: 'font-size 0.5s ease-in-out',
	},
	alternate: {},
	home: {
		fontSize: 'clamp(4rem, 6rem, 11vmin)',
	},
};

export const nameStyle: CSSObject = {
	lineHeight: '1',
	margin: '0',
	boxSizing: 'border-box',
	paddingBottom: '1rem',
};

export const titleStyles: DynamicStyles = {
	default: {
		color: '#2FC5CC',
		fontFamily: 'Courier New',
		textAlign: 'left',
	},
	alternate: {
		textAlign: 'center',
	},
	home: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
};
