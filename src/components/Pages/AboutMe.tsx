import { css } from '@emotion/css';
import React from 'react';
import placeholder from '../../assets/images/portrait-placeholder.png';

export function AboutMe(): React.JSX.Element {
	const textBoxStyle = css({
		backgroundColor: '#00007A',
		color: '#CCCCFF',
		boxShadow: '0 0 5px 5px #00007A',
		fontSize: '12pt',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		boxSizing: 'border-box',
		padding: '1rem',
		height: '90vh',
	});

	return (
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
	);
}

function Portrait(): React.JSX.Element {
	const portraitStyle = css({
		borderRadius: '50%',
		height: '192px',
		width: '192px',
	});

	const imgSrc = process.env.REACT_APP_PORTRAIT_IMG_URL || placeholder;

	return (
		<img
			id='main'
			className={portraitStyle}
			src={imgSrc}
			alt='A professional head shot of myself'
		/>
	);
}