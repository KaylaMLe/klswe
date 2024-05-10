import { css, keyframes } from '@emotion/css';
import React, { useCallback, useState } from 'react';
import { HOME } from '../../hooks/PageNumbers';
import chime from '../../assets/audio/chime.wav';
import flower from '../../assets/images/flower.png';
import tree from '../../assets/images/tree.png';
import voloff from '../../assets/images/voloff.png';
import volon from '../../assets/images/volon.png';
import { homeStyles, muteBtnStyles, treeBoxStyles } from './HomeStyles';
import { Page } from './Page';
import { ResponsiveComponent } from '../ResponsiveComponents/ResponsiveComponent';

interface FlowerProps {
	id: number;
	dX: number;
	dY: number;
	rotation: number;
};

export default function Home(): React.JSX.Element {
	const [muted, setMuted] = useState(false);

	return (
		<Page pageNumber={HOME.pageNumber}>
			<ResponsiveComponent Component='div' styles={homeStyles} data-testid='home'>
				<MuteBtn onClick={() => { setMuted(!muted) }} muted={muted} />
				<Tree muted={muted} />
			</ ResponsiveComponent>
		</Page>
	);
}

function MuteBtn({ onClick, muted }: { onClick: () => void, muted: boolean }): React.JSX.Element {
	return (
		<ResponsiveComponent
			Component='button'
			styles={muteBtnStyles}
			onClick={onClick}
		>
			<img src={muted ? volon : voloff} alt='' />
			{muted ? 'Unmute sound effects' : 'Mute sound effects'}
		</ResponsiveComponent>
	);
}

function Tree({ muted }: { muted: boolean }): React.JSX.Element {
	const [flowerProps, setFlowerProps] = useState<FlowerProps[]>([]);
	const [flowerId, setFlowerId] = useState(0);

	const treeImgStyle = css({
		height: '100%',
		width: '100%',
	});

	const FLOWER_LIMIT = 256;
	// slice removes oldest flower props in list
	const sliceInd = Number(flowerProps.length >= FLOWER_LIMIT);

	const addFlower = useCallback(() => {
		setFlowerProps([...flowerProps.slice(sliceInd, FLOWER_LIMIT),
		{
			id: flowerId,
			// flower can be positioned across entire width of tree (100%)
			dX: Math.random() * 100,
			// flower height is limited to branches (top 50%)
			dY: Math.random() * 50,
			rotation: Math.floor(Math.random() * 360),
		}]);

		setFlowerId((flowerId + 1) % FLOWER_LIMIT);

		if (!muted) {
			const audioElement = document.getElementById('clickSound') as HTMLAudioElement;

			if (audioElement) {
				audioElement.play();
			} else {
				console.error('Audio element not found');
			}
		}
	}, [flowerProps, flowerId, muted]);

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			addFlower();
		}
	};

	return (
		<ResponsiveComponent
			Component='button'
			styles={treeBoxStyles}
			onClick={addFlower}
			onKeyDown={handleKeyDown}
			aria-label='Press space or enter to play a chime and add a flower to the tree.'
		>
			<audio id='clickSound'>
				<source src={chime}></source>
				Your browser does not support the audio element.
			</audio>
			<img
				className={treeImgStyle}
				src={tree}
				alt={`Digital drawing of a bonsai tree${flowerProps.length === 1 ? ' with a light pink flower on it'
					: flowerProps.length > 0 ? ` with ${flowerProps.length} light pink flowers on it` : ''}`}
			/>
			{flowerProps.map(props => (
				<Flower
					key={props.id}
					id={props.id}
					dX={props.dX}
					dY={props.dY}
					rotation={props.rotation}
				/>
			))}
		</ ResponsiveComponent>
	);
}

function Flower({ id, dX, dY, rotation }
	: { id: number, dX: number, dY: number, rotation: number }): React.JSX.Element {
	const spinAnimation = keyframes`
		from {
			rotate: 0deg;
		}
		to {
			rotate: ${rotation}deg;
		}
	`;

	const flowerStyle = css({
		position: 'absolute',
		left: `${dX}%`,
		top: `${dY}%`,
		rotate: `${rotation}deg`,
		animation: `${spinAnimation} 0.5s ease-in-out`
	});

	return (
		<img
			id={id.toString()}
			className={flowerStyle}
			src={flower}
			alt=''
		/>
	);
}
