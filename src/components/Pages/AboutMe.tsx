import { css } from '@emotion/css';
import React from 'react';
import { useIsMobile } from '../../hooks/ViewPortContext';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import { Page } from './Page';
import placeholder from '../../assets/images/portrait-placeholder.png';

export default function AboutMe(): React.JSX.Element {
	const { isMobile } = useIsMobile();

	const textBoxStyle = css({
		color: '#CCCCFF',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		padding: '1rem',
		height: '100%',
		minHeight: isMobile ? '625px' : '350px',
	});

	return (
		<Page pageNumber={ABOUT_ME.pageNumber}>
			<div className={textBoxStyle}>
				<Portrait />
				<p>{import.meta.env.VITE_ABOUT_ME_TXT || 'Hi!'}</p>
			</div>
		</Page>
	);
}

function Portrait(): React.JSX.Element {
	const portraitStyle = css({
		borderRadius: '50%',
		height: '192px',
		width: '192px',
	});

	const imgSrc = import.meta.env.VITE_PORTRAIT_IMG_URL || placeholder;

	return (
		<img
			className={portraitStyle}
			src={imgSrc}
			alt='Professional head shot of myself'
		/>
	);
}