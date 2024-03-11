import { css } from '@emotion/css';
import React from 'react';
import { ABOUT_ME } from '../../hooks/PageNumbers';
import { Page } from './Page';
import placeholder from '../../assets/images/portrait-placeholder.png';

export default function AboutMe(): React.JSX.Element {
	const textBoxStyle = css({
		backgroundColor: '#00007A',
		color: '#CCCCFF',
		boxShadow: '0 0 5px 5px #00007A',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		padding: '1rem',
		height: '90vh',
	});

	return (
		<Page pageNumber={ABOUT_ME.pageNumber}>
			<div className={textBoxStyle}>
				<Portrait />
				<p>
					I'm a passionate web developer on the brink of graduation, eager to dive into the tech world
					with fresh ideas. This website is my digital canvas, meticulously crafted to showcase my
					technical skills, creativity, and the projects I'm proud of. My journey in web development
					blends analytical thinking with aesthetic design, aiming to create seamless, user-friendly
					experiences. As I stand at the threshold of my professional career, I'm enthusiastic about
					securing my first full-time software engineering role, eager to contribute, learn, and grow
					within a dynamic team.
				</p>
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