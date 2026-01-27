/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
	pageStyle,
	aboutMeBoxStyle,
	glassBlurStyle,
	glassPanelStyle,
	aboutMeTextContainerStyle,
	aboutMeTitleStyle,
	aboutMeTextStyle,
} from './Home.styles';
import { GradientSweeps, StarBox } from './HomeBackground';
import { NavBar } from '../../NavBar/NavBar';
import { ProjectsOverview } from './ProjectsOverview';

export default function Home(): React.JSX.Element {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div css={pageStyle}>
			<GradientSweeps />
			<NavBar isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
			<StarBox />
			<AboutMe />
			<ProjectsOverview />
		</div>
	);
}

function AboutMe(): React.JSX.Element {
	return (
		<div css={aboutMeBoxStyle} id="about-me">
			<div css={glassBlurStyle} />
			<div css={glassPanelStyle} />
			<div css={aboutMeTextContainerStyle}>
				<h2 css={aboutMeTitleStyle}>Hello!</h2>
				<p css={aboutMeTextStyle}>
					I'm a software engineer who thrives in fast-moving environments where ideas turn into products quickly. I'm
					happiest when the stakes are high and ideas are still taking shape.
				</p>
				<p css={aboutMeTextStyle}>
					I have experience in rapid prototyping: the art of turning rough ideas into working demos that bring concepts
					to life quickly. From hackathon projects to startup demos, I've tested feasibility, uncovered user value, and
					sparked bigger conversations.
				</p>
				<p css={aboutMeTextStyle}>
					I thrive in small teams where I can wear multiple hats and take ownership end-to-end. Startups energize me
					because they reward this exact creativity, adaptability, and initiative.
				</p>
			</div>
		</div>
	);
}
