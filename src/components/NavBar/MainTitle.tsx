import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { HOME } from '../../hooks/PageNumbers';
import { useIsMobile } from '../../hooks/ViewPortContext';

export function MainTitle({ isHome }: { isHome: boolean }): React.JSX.Element {
	const { isMobile } = useIsMobile();

	const titleStyle = css({
		color: '#2FC5CC',
		fontFamily: 'Courier New',
		textAlign: isMobile ? 'center' : 'left',
	});

	const homeTitleStyle = css({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	});

	const linkStyle = css({
		textDecoration: 'none',
		color: '#2FC5CC',
		fontSize: isHome && !isMobile ? 'clamp(3rem, 4vw, 9rem)' : '2rem',
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'font-size 0.5s ease-in-out',
		},
	});

	const nameStyle = css({
		margin: '0',
	});

	const headlineStyle = css({
		fontSize: '3rem',
	});

	return (
		<div className={`${titleStyle} ${isHome && homeTitleStyle}`}>
			<Link to={HOME.link} className={linkStyle} >
				<h1 className={nameStyle}>
					Kayla Le
				</h1>
			</Link>
			{isHome && <h2 className={headlineStyle}>Software Engineer</h2>}
		</div>
	);
}
