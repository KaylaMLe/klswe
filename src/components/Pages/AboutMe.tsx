import { css } from '@emotion/css';
import React from 'react';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import { ABOUT_ME_TXT, PORTRAIT_IMG_URL } from '../../constants';
import placeholder from '../../assets/images/portrait-placeholder.png';
import { aboutMeStyles } from '../styles/Pages/AboutMeStyles';
import { ResponsiveComponent } from '../ResponsiveComponents/ResponsiveComponent';
import { Page } from './Page';

export default function AboutMe(): React.JSX.Element {
	const paragraphStyle = css({
		color: '#9FE6EA',
		margin: '0',
		boxSizing: 'border-box',
		paddingBottom: '5vmin',
	});

	return (
		<Page pageNumber={ABOUT_ME.pageNumber} title='About me'>
			<ResponsiveComponent Component='div' allStyles={aboutMeStyles}>
				<Portrait />
				<p className={paragraphStyle}>{ABOUT_ME_TXT || 'Hi!'}</p>
			</ResponsiveComponent>
		</Page>
	);
}

function Portrait(): React.JSX.Element {
	const portraitStyle = css({
		borderRadius: '50%',
		height: '50vmin',
		maxHeight: '300px',
		width: '50vmin',
		maxWidth: '300px',
		justifySelf: 'center',
	});

	const imgSrc = PORTRAIT_IMG_URL || placeholder;

	return (
		<img
			className={portraitStyle}
			src={imgSrc}
			alt='Professional head shot of myself'
		/>
	);
}