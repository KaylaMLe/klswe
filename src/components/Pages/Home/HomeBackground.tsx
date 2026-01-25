/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from 'react';
import {
	blueSweepStyle,
	gradientBackgroundStyle,
	gradientWrapperStyle,
	purpleSweepStyle,
	starBoxStyle,
	starStyle,
} from './HomeBackground.styles';

export function GradientSweeps(): React.JSX.Element {
	return (
		<div css={gradientWrapperStyle}>
			<div css={{ ...blueSweepStyle, ...gradientBackgroundStyle }} />
			<div css={{ ...purpleSweepStyle, ...gradientBackgroundStyle }} />
		</div>
	);
}

interface Star {
	id: number;
	x: number;
	y: number;
	opacity: number;
	size: number;
}

export function StarBox(): React.JSX.Element {
	const [stars, setStars] = useState<Record<number, Star>>({});
	const [starCount, setStarCount] = useState(0);
	const [maxStars, setMaxStars] = useState(100);
	const [isTabVisible, setIsTabVisible] = useState(!document.hidden);
	const containerRef = useRef<HTMLDivElement>(null);
	const nextId = useRef(0);

	// Calculate max stars based on starBox dimensions
	const calculateMaxStars = () => {
		const starBoxWidth = window.innerWidth;
		const starBoxHeight = Math.min(
			window.innerWidth * 1.05, // 105vmin (innerHeight * 1.05 is always greater than 100vh)
			window.innerHeight // cap at 100vh
		);

		const area = starBoxWidth * starBoxHeight;
		const starsPerArea = area / 22500;
		return Math.floor(starsPerArea);
	};

	// Generate weighted random star size (70% 1px, 30% 2px)
	const generateStarSize = () => {
		const random = Math.random();
		return random < 0.7 ? 1 : 2;
	};

	const createStar = () => {
		if (!containerRef.current || !isTabVisible) return;

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
		if (!isTabVisible) return;

		setStars((prev) => {
			const starIds = Object.keys(prev).map(Number);
			if (starIds.length === 0) return prev;

			const randomId = starIds[Math.floor(Math.random() * starIds.length)];

			// Fade out the star
			const updatedStars = { ...prev };
			updatedStars[randomId] = { ...updatedStars[randomId], opacity: 0 };

			// Remove the star after fade out completes
			setTimeout(() => {
				// Check if tab is still visible before removing
				if (isTabVisible) {
					setStars((current) => {
						const { [randomId]: removed, ...remaining } = current;
						return remaining;
					});
					setStarCount((current) => current - 1);
				}
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

	// Handle page visibility changes
	useEffect(() => {
		const handleVisibilityChange = () => {
			const isVisible = !document.hidden;
			setIsTabVisible(isVisible);
		};

		document.addEventListener('visibilitychange', handleVisibilityChange);

		return () => {
			document.removeEventListener('visibilitychange', handleVisibilityChange);
		};
	}, []);

	useEffect(() => {
		// Only run star operations when tab is visible
		if (!isTabVisible) return;

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
	}, [starCount, maxStars, isTabVisible]);

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
