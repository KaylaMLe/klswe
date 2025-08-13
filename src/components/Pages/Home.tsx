/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import { starStyle, starBoxStyle } from "./Home.styles";

interface Star {
	id: number;
	x: number;
	y: number;
	opacity: number;
	size: number;
}

export default function Home(): React.JSX.Element {
	return (
		<div>
			<StarBox />
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

	// Generate weighted random star size (50% 1px, 30% 2px, 20% 3px)
	const generateStarSize = () => {
		const random = Math.random();
		if (random < 0.5) return 1; // 50% chance
		if (random < 0.8) return 2; // 30% chance (0.5 + 0.3)
		return 3; // 20% chance (remaining)
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
		window.addEventListener("resize", updateMaxStars);

		return () => {
			window.removeEventListener("resize", updateMaxStars);
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
