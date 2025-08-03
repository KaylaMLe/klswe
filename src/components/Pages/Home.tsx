/** @jsxImportSource @emotion/react */
import React, { useState, useEffect, useRef } from "react";
import { starStyle, starBoxStyle } from "./Home.styles";

interface Star {
	id: number;
	x: number;
	y: number;
	opacity: number;
}

export default function Home(): React.JSX.Element {
	const [stars, setStars] = useState<Record<number, Star>>({});
	const [starCount, setStarCount] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);
	const nextId = useRef(0);

	const createStar = () => {
		if (!containerRef.current) return;
		console.log("Creating star");

		const container = containerRef.current;
		const x = Math.random() * container.offsetWidth;
		const y = Math.random() * container.offsetHeight;

		const newStar: Star = {
			id: nextId.current++,
			x,
			y,
			opacity: 0,
		};

		setStars((prev) => ({ ...prev, [newStar.id]: newStar }));
		setStarCount((prev) => prev + 1);

		requestAnimationFrame(() => {
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

	useEffect(() => {
		const createInterval = setInterval(() => {
			if (starCount < 100) {
				createStar();
			}
		}, 500);

		const removeInterval = setInterval(() => {
			if (starCount > 80) {
				removeStar();
			}
		}, 500);

		return () => {
			clearInterval(createInterval);
			clearInterval(removeInterval);
		};
	}, [starCount]);

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
					}}
				/>
			))}
		</div>
	);
}
