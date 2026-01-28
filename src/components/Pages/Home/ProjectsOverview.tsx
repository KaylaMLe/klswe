/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../../constants.js';
import { Entry } from '../entry.js';
import {
	overviewContainerStyle,
	overviewTitleStyle,
	cardsWrapperStyle,
	cardStyle,
	mainContentStyle,
	cardImageStyle,
	cardTextContainerStyle,
	cardTitleStyle,
	cardDescriptionStyle,
	navigationContainerStyle,
	arrowButtonStyle,
	arrowIconStyle,
	dotsContainerStyle,
	dotStyle,
	activeDotStyle,
} from './ProjectsOverview.styles.js';
import { CSSObject } from '@emotion/react';

export function ProjectsOverview(): React.JSX.Element {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [slides, setSlides] = useState<Entry[]>([]);

	useEffect(() => {
		fetch(`${API_URL}/entries/cards`)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setSlides(data);
			})
			.catch((error) => console.error('Error fetching projects:', error));
	}, []);

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

	const props: React.HTMLAttributes<HTMLDivElement> & { css?: CSSObject } = {
		id: 'projects-overview',
	}

	if (slides.length > 0) {
		props.css = overviewContainerStyle;
	} else {
		props['className'] = 'hidden';
	}

	return (
		<div {...props}>
			<h2 css={overviewTitleStyle}>My work</h2>
			<div css={cardsWrapperStyle}>
				{slides.length > 0 && Array.from(slides, (card: Entry, index: number) => (
					<div
						key={index}
						css={[
							cardStyle,
							{
								transform: `translateX(${(index - currentSlide) * 100}%)`,
								opacity: index === currentSlide ? 1 : 0.7,
							},
						]}
					>
						<div css={mainContentStyle}>
							<img src={card.hero_image_url} alt={card.title} css={cardImageStyle} />
							<div css={cardTextContainerStyle}>
								<h3 css={cardTitleStyle}>{card.title}</h3>
								<p css={cardDescriptionStyle}>{card.body}</p>
							</div>
						</div>
					</div>
				))}
			</div>

			{slides.length > 1 && <div css={navigationContainerStyle}>
				<button css={arrowButtonStyle} onClick={prevSlide} aria-label="Previous project">
					<svg css={arrowIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
					</svg>
				</button>

				<div css={dotsContainerStyle}>
					{Array.from({ length: slides.length }, (_, i) => (
						<button
							key={i}
							css={[dotStyle, i === currentSlide && activeDotStyle]}
							onClick={() => goToSlide(i)}
							aria-label={`Go to slide ${i + 1}`}
						/>
					))}
				</div>

				<button css={arrowButtonStyle} onClick={nextSlide} aria-label="Next project">
					<svg css={arrowIconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</button>
			</div>}
		</div>
	);
}
