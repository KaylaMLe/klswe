/** @jsxImportSource @emotion/react */
import React from 'react';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import {
	hexagonBoxStyles,
	hexagonSvgStyles,
	heroTextStyles,
	nameStyles,
	titleStyles,
	subtitleStyles,
} from './MainTitle.styles';
import hexagonSvgUrl from '../../assets/images/hexagon.svg';

//TODO: loading flashes default layout briefly before loading home layout
export function MainTitle(): React.JSX.Element {
	return (
		<Responsive Component="div" styles={hexagonBoxStyles}>
			<Responsive Component="img" src={hexagonSvgUrl} alt="Decorative hexagon" styles={hexagonSvgStyles} />
			<Responsive Component="a" styles={heroTextStyles} href="/">
				<Responsive Component="h1" styles={nameStyles}>
					Kayla Le
				</Responsive>
				<Responsive Component="h2" styles={titleStyles}>
					Full-Stack
					<br />
					Software Engineer
				</Responsive>
				<Responsive Component="h3" styles={subtitleStyles}>
					I build things for the web.
				</Responsive>
			</Responsive>
		</Responsive>
	);
}
