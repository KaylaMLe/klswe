/** @jsxImportSource @emotion/react */
import React from 'react';
import placeholder from '../../assets/images/portrait-placeholder.png';
import { ABOUT_ME_TXT, ABOUT_ME_P2, PORTRAIT_URL } from '../../constants';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { aboutMeStyles, paragraphBoxStyle, paragraphStyle, portraitStyle } from './AboutMe.styles';
import { Page } from './Page';

export default function AboutMe(): React.JSX.Element {
	return (
		<Page pageNumber={ABOUT_ME.pageNumber} title='About me'>
			<Responsive Component='div' styles={aboutMeStyles} data-testid='about-me'>
				<Portrait />
				<div css={paragraphBoxStyle}>
					<p css={paragraphStyle}>{ABOUT_ME_TXT || 'Hi!'}</p>
					<p css={paragraphStyle}>{ABOUT_ME_P2 || 'I am a software engineer.'}</p>
				</div>
			</Responsive>
		</Page>
	);
}

function Portrait(): React.JSX.Element {
	const imgSrc = PORTRAIT_URL || placeholder;

	return (
		<img
			css={portraitStyle}
			src={imgSrc}
			alt='Professional head shot of myself'
		/>
	);
}
