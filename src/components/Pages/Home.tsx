/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import {
	pageStyle,
	gradientBackgroundStyle,
	blueSweepStyle,
	purpleSweepStyle,
	starStyle,
	starBoxStyle,
	hexagonBoxStyle,
	hexagonSvgStyle,
	heroTextStyle,
	nameStyle,
	titleStyle,
	subtitleStyle,
	aboutMeBoxStyle,
	glassBlurStyle,
	glassPanelStyle,
	aboutMeTextContainerStyle,
	aboutMeTitleStyle,
	aboutMeTextStyle,
} from './Home.styles';
import hexagonSvgUrl from '../../assets/images/hexagon.svg';

interface Star {
	id: number;
	x: number;
	y: number;
	opacity: number;
	size: number;
}

export default function Home(): React.JSX.Element {
	return (
		<div css={pageStyle}>
			<div css={{ ...blueSweepStyle, ...gradientBackgroundStyle }} />
			<div css={{ ...purpleSweepStyle, ...gradientBackgroundStyle }} />
			<StarBox />
			<Hexagon />
			<AboutMe />
		</div>
	);
}

function StarBox(): React.JSX.Element {
	const [stars, setStars] = useState<Record<number, Star>>({});
	const [starCount, setStarCount] = useState(0);
	const [maxStars, setMaxStars] = useState(100);
	const containerRef = useRef<HTMLDivElement>(null);
	const nextId = useRef(0);

	// Calculate max stars based on viewport area (1 star per 20000 pixels)
	const calculateMaxStars = () => {
		const area = window.innerWidth * window.innerHeight;
		const starsPerArea = area / 20000;
		return Math.floor(starsPerArea);
	};

	// Generate weighted random star size (70% 1px, 30% 2px)
	const generateStarSize = () => {
		const random = Math.random();
		return random < 0.7 ? 1 : 2;
	};

	const createStar = () => {
		if (!containerRef.current) return;

		const container = containerRef.current;
		const x = Math.random() * container.offsetWidth;
		const y = Math.random() * container.offsetHeight;

		const newStar: Star = {
			id: nextId.current++,
			x,
			y,
			opacity: 0,
			size: generateStarSize(), // Weighted random size
		};

		setStars((prev) => ({ ...prev, [newStar.id]: newStar }));
		setStarCount((prev) => prev + 1);

		// star created on our end -> star rendered/added to dom
		requestAnimationFrame(() => {
			// star rendered -> star fade in
			requestAnimationFrame(() => {
				setStars((prev) => ({
					...prev,
					[newStar.id]: { ...prev[newStar.id], opacity: 1 },
				}));
			});
		});
	};

	const removeStar = () => {
		setStars((prev) => {
			const starIds = Object.keys(prev).map(Number);
			if (starIds.length === 0) return prev;

			const randomId = starIds[Math.floor(Math.random() * starIds.length)];

			// Fade out the star
			const updatedStars = { ...prev };
			updatedStars[randomId] = { ...updatedStars[randomId], opacity: 0 };

			// Remove the star after fade out completes
			setTimeout(() => {
				setStars((current) => {
					const { [randomId]: removed, ...remaining } = current;
					return remaining;
				});
				setStarCount((current) => current - 1);
			}, 1000);

			return updatedStars;
		});
	};

	// Initialize max stars and handle window resize
	useEffect(() => {
		const updateMaxStars = () => {
			const newMaxStars = calculateMaxStars();
			setMaxStars(newMaxStars);
		};

		// Set initial max stars
		updateMaxStars();

		// Add resize listener
		window.addEventListener('resize', updateMaxStars);

		return () => {
			window.removeEventListener('resize', updateMaxStars);
		};
	}, []);

	useEffect(() => {
		const createInterval = setInterval(() => {
			if (starCount < maxStars) {
				createStar();
			}
		}, Math.random() * 1000 + 500); // Random between 500-1500ms

		const removeInterval = setInterval(() => {
			const minStars = Math.floor(maxStars * 0.8); // 80% of max stars

			if (starCount > minStars) {
				removeStar();
			}
		}, Math.random() * 1000 + 500);

		return () => {
			clearInterval(createInterval);
			clearInterval(removeInterval);
		};
	}, [starCount, maxStars]);

	return (
		<div ref={containerRef} css={starBoxStyle}>
			{Object.values(stars).map((star) => (
				<div
					key={star.id}
					css={starStyle}
					style={{
						left: `${star.x}px`,
						top: `${star.y}px`,
						opacity: star.opacity,
						width: `${star.size}px`,
						height: `${star.size}px`,
					}}
				/>
			))}
		</div>
	);
}

function Hexagon(): React.JSX.Element {
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

function AboutMe(): React.JSX.Element {
	return (
		<div css={aboutMeBoxStyle}>
			<div css={glassBlurStyle} />
			<div css={glassPanelStyle} />
			<div css={aboutMeTextContainerStyle}>
				<h2 css={aboutMeTitleStyle}>About me</h2>
				<p css={aboutMeTextStyle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula nisi eget mi auctor vestibulum. Nunc
					ut molestie erat. Cras vitae dolor magna. Nullam fermentum velit id libero elementum tincidunt. Vestibulum
					imperdiet euismod auctor. Cras aliquet lorem at arcu vestibulum imperdiet. Nullam molestie sollicitudin turpis
					eget interdum. Nullam eu metus vitae mauris bibendum mollis. Cras eget commodo nunc, sed lacinia massa. Donec
					commodo nisi nec maximus eleifend. Fusce hendrerit viverra ipsum nec accumsan. Aliquam sagittis felis
					venenatis tortor ultrices, tempor venenatis nibh interdum. Nam viverra auctor mauris id iaculis. Praesent
					bibendum leo nec accumsan commodo. Vivamus aliquet eros sit amet felis scelerisque, sit amet tempor nisi
					dignissim. Nam ac sapien at neque aliquam vestibulum. Duis eget facilisis justo. Donec et urna leo. Quisque
					porta venenatis orci ac ullamcorper. Duis malesuada consectetur nibh, vitae fermentum metus ornare quis.
					Vivamus eu libero non enim consequat aliquet vel non libero. Nulla ut auctor lacus. Ut laoreet diam ac mauris
					tristique placerat. Aenean et ultricies neque, in maximus lacus. Donec tincidunt, eros et condimentum
					pellentesque, augue erat tincidunt lacus, ut suscipit lorem nibh euismod nulla. Fusce nec enim luctus, tempor
					tellus a, accumsan metus. Cras dignissim non ligula non vehicula. Ut tincidunt mi sem, sed facilisis erat
					molestie non. Nunc sit amet est quis dui fringilla posuere vitae gravida massa.
				</p>
			</div>
		</div>
	);
}
