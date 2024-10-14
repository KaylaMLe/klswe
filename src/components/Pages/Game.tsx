import { css } from '@emotion/css';
import React, { useEffect, useRef, useState } from 'react';
import { GAME } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { Page } from './Page';

export default function Game(): React.JSX.Element {
	return (
		<Page pageNumber={GAME.pageNumber} title='About me'>
			<GameWindow />
		</Page>
	);
}

function GameWindow(): React.JSX.Element {
	const windowStyle = css({
		height: '550px',
		width: '1470px',
		backgroundColor: '#FFFFFF',
		position: 'relative',
	});

	return (
		<div className={windowStyle}>
			<Player />
		</div>
	);
}

function Player(): React.JSX.Element {
	const [position, setPosition] = useState({ top: 0, left: 0 });
	const speed = 1;
	const keysPressed = useRef<{ [key: string]: boolean }>({});

	const handleKeyDown = (event: KeyboardEvent) => {
		keysPressed.current[event.key] = true;
	};

	const handleKeyUp = (event: KeyboardEvent) => {
		keysPressed.current[event.key] = false;
	};

	const updatePosition = () => {
		setPosition((prev) => {
			let newTop = prev.top;
			let newLeft = prev.left;

			if (keysPressed.current['w']) newTop -= speed;
			if (keysPressed.current['s']) newTop += speed;
			if (keysPressed.current['a']) newLeft -= speed;
			if (keysPressed.current['d']) newLeft += speed;

			return { top: newTop, left: newLeft };
		});
		requestAnimationFrame(updatePosition);
	};
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);
		requestAnimationFrame(updatePosition);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const playerStyle = css({
		height: '50px',
		width: '50px',
		backgroundColor: '#000000',
		position: 'absolute',
		top: position.top,
		left: position.left,
	});

	return <div className={playerStyle}></div>;
}