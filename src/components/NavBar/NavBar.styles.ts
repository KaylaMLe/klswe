import { CSSObject } from "@emotion/react";

export const navMenuStyle: CSSObject = {
	position: 'fixed',
	top: '1rem',
	right: '1rem',
	zIndex: 1000,
};

export const navButtonStyle: CSSObject = {
	background: 'rgba(255, 255, 255, 0.09)',
	border: 'none',
	borderRadius: '8px',
	padding: '0.75rem',
	color: '#B6ADFF',
	backdropFilter: 'blur(10px)',
	boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
	transition: 'all 0.2s ease-in-out',
	height: '45px',
	width: '45px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'&:hover': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
	'&:active': {
		background: 'rgba(255, 255, 255, 0.2)',
	},
	'& svg': {
		transition: 'transform 0.3s ease-in-out, opacity 0.2s ease-in-out',
	},
};

export const hamburgerBarStyle: CSSObject = {
	display: 'block',
	position: 'absolute',
	height: '3px',
	width: '24px',
	backgroundColor: '#7E76A7',
	borderRadius: '2px',
	transition: 'all 0.3s ease',
};

export const menuDropdownStyle: CSSObject = {
	position: 'absolute',
	top: '100%',
	right: 0,
	marginTop: '0.5rem',
	background: 'rgba(255, 255, 255, 0.1)',
	backdropFilter: 'blur(10px)',
	borderRadius: '8px',
	padding: '0.5rem 0',
	minWidth: '150px',
	boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
	animation: 'fadeInDown 0.2s ease-out',
};

export const menuItemStyle: CSSObject = {
	display: 'block',
	padding: '0.75rem 1rem',
	color: '#B6ADFF',
	textDecoration: 'none',
	fontSize: '0.9rem',
	fontWeight: 500,
	transition: 'all 0.2s ease-in-out',
	'&:hover': {
		background: 'rgba(255, 255, 255, 0.1)',
		color: '#FFFFFF',
	},
};
