import { css } from '@emotion/css';
import React from 'react';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import { ABOUT_ME_TXT, ABOUT_ME_P2, PORTRAIT_URL } from '../../constants';
import placeholder from '../../assets/images/portrait-placeholder.png';
import { aboutMeStyles, paragraphBoxStyle, paragraphStyle } from './AboutMe.styles';
import { ResponsiveComponent } from '../ResponsiveComponents/ResponsiveComponent';
import { Page } from './Page';

export default function AboutMe(): React.JSX.Element {
	return (
		<Page pageNumber={ABOUT_ME.pageNumber} title='About me'>
			<ResponsiveComponent Component='div' styles={aboutMeStyles} data-testid='about-me'>
				<Portrait />
				<div className={css(paragraphBoxStyle)}>
					<p className={css(paragraphStyle)}>{ABOUT_ME_TXT || 'Hi!'}</p>
					<p className={css(paragraphStyle)}>{ABOUT_ME_P2 || 'I am a software engineer.'}</p>
				</div>
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

	const imgSrc = PORTRAIT_URL || placeholder;

	return (
		<img
			className={portraitStyle}
			src={imgSrc}
			alt='Professional head shot of myself'
		/>
	);
}
