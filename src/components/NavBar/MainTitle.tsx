/** @jsxImportSource @emotion/react */
import React from 'react';
import { hexagonBoxStyle, hexagonSvgStyle, heroTextStyle, nameStyle, titleStyle, subtitleStyle } from './MainTitle.styles';
import hexagonSvgUrl from '../../assets/images/hexagon.svg';

export function MainTitle(): React.JSX.Element {
	return (
		<div css={hexagonBoxStyle}>
			<img src={hexagonSvgUrl} alt="Decorative hexagon" css={hexagonSvgStyle} />
			<div css={heroTextStyle}>
				<h1 css={nameStyle}>Kayla Le</h1>
				<h2 css={titleStyle}>
					Full-Stack
					<br />
					Software Engineer
				</h2>
				<h3 css={subtitleStyle}>I build things for the web.</h3>
			</div>
		</div>
	);
}
