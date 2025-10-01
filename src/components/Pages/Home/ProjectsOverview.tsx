/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import {
	slideshowContainerStyle,
	overviewTitleStyle,
	cardsWrapperStyle,
	cardStyle,
	cardContentStyle,
	cardTitleStyle,
	cardDescriptionStyle,
	navigationContainerStyle,
	arrowButtonStyle,
	arrowIconStyle,
	dotsContainerStyle,
	dotStyle,
	activeDotStyle,
} from './ProjectsOverview.styles.js';

interface ProjectCard {
	id: number;
	title: string;
	description: string;
	technologies: string[];
}

const projectCards: ProjectCard[] = [
	{
		id: 1,
		title: 'E-Commerce Platform',
		description:
			'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
		technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
	},
	{
		id: 2,
		title: 'Task Management App',
		description:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express'],
	},
	{
		id: 3,
		title: 'Portfolio Website',
		description:
			'A personal portfolio website built with React, TypeScript, and Emotion. Features include a responsive design, smooth animations, and a contact form.',
		technologies: ['React', 'TypeScript', 'Emotion', 'Vite'],
	},
];

export function ProjectsOverview(): React.JSX.Element {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % projectCards.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + projectCards.length) % projectCards.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div css={slideshowContainerStyle} id="projects-overview">
			<h2 css={overviewTitleStyle}>My work</h2>
			<div css={cardsWrapperStyle}>
				{projectCards.map((card, index) => (
					<div
						key={card.id}
						css={[
							cardStyle,
							{
								transform: `translateX(${(index - currentSlide) * 100}%)`,
								opacity: index === currentSlide ? 1 : 0.7,
							},
						]}
					>
						<div css={cardContentStyle}>
							<h3 css={cardTitleStyle}>{card.title}</h3>
							<p css={cardDescriptionStyle}>{card.description}</p>
							<div css={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
								{card.technologies.map((tech) => (
									<span
										key={tech}
										css={{
											background: 'rgba(182, 173, 255, 0.2)',
											border: '1px solid rgba(182, 173, 255, 0.3)',
											borderRadius: '12px',
											padding: '0.25rem 0.75rem',
											fontSize: '0.875rem',
											color: '#B6ADFF',
										}}
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			<div css={navigationContainerStyle}>
				<button css={arrowButtonStyle} onClick={prevSlide} aria-label="Previous project">
					<svg css={arrowIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<div css={dotsContainerStyle}>
					{projectCards.map((_, index) => (
						<button
							key={index}
							css={[dotStyle, index === currentSlide && activeDotStyle]}
							onClick={() => goToSlide(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				<button css={arrowButtonStyle} onClick={nextSlide} aria-label="Next project">
					<svg css={arrowIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
	);
}
