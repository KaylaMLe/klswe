import { css } from '@emotion/css';
import React from 'react';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import placeholder from '../../assets/images/portrait-placeholder.png';
import { textBoxStyles } from '../styles/Pages/AboutMeStyles';
import { ResponsiveComponent } from '../ResponsiveComponents/ResponsiveComponent';
import { Page } from './Page';

export default function AboutMe(): React.JSX.Element {
	return (
		<Page pageNumber={ABOUT_ME.pageNumber}>
			<ResponsiveComponent Component='div' allStyles={textBoxStyles}>
				<Portrait />
				<p>{import.meta.env.VITE_ABOUT_ME_TXT || 'Hi!'}</p>
			</ResponsiveComponent>
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