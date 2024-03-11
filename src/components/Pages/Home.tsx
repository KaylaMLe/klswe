import { css, keyframes } from '@emotion/css';
import React, { useState } from 'react';
import { HOME } from '../../hooks/PageNumbers';
import { Page } from './Page';
import chime from '../../assets/audio/chime.wav';
import flower from '../../assets/images/flower.png';
import tree from '../../assets/images/tree.png';
import voloff from '../../assets/images/voloff.png';
import volon from '../../assets/images/volon.png';


interface FlowerProps {
	id: number;
	dX: number;
	dY: number;
	rotation: number;
};

export default function Home(): React.JSX.Element {
	const [muted, setMuted] = useState(false);

	const homeStyle = css({
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '90vh',
		minHeight: '375px',
		position: 'relative',
	});

	return (
		<Page pageNumber={HOME.pageNumber}>
			<div className={homeStyle}>
				<MuteBtn onClick={() => { setMuted(!muted) }} muted={muted} />
				<Tree muted={muted} />
			</div>
		</Page>
	);
}

function MuteBtn({ onClick, muted }: { onClick: () => void, muted: boolean }): React.JSX.Element {
	const muteBtnStyle = css({
		backgroundColor: '#EEA8D9',
		borderColor: '#602267',
		borderRadius: '2rem',
		borderStyle: 'solid',
		fontSize: '0.85em',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '8px',
		position: 'absolute',
		top: '10px',
		left: '5px',
		width: '200px',
	});

	return (
		<button
			className={muteBtnStyle}
			onClick={onClick}
		>
			<img src={muted ? volon : voloff} alt='' />
			{muted ? 'Unmute sound effects' : 'Mute sound effects'}
		</button>
	);
}

function Tree({ muted }: { muted: boolean }): React.JSX.Element {
	const [flowerProps, setFlowerProps] = useState<FlowerProps[]>([]);
	const [flowerId, setFlowerId] = useState(0);

	const treeBoxStyle = css({
		position: 'relative',
		background: 'none',
		border: 'none',
	});

	const addFlower = () => {
		if (flowerProps.length === 64) {
			setFlowerProps(flowerProps.slice(1));
		}

		setFlowerProps([...flowerProps,
		{
			id: flowerId,
			// flower can be positioned across entire width of tree (258 px)
			dX: Math.floor(Math.random() * 259),
			// flower height is limited to branches (top 169 px)
			dY: Math.floor(Math.random() * 170),
			rotation: Math.floor(Math.random() * 360),
		}]);

		setFlowerId((flowerId + 1) % 64);

		if (!muted) {
			const audioElement = document.getElementById('clickSound') as HTMLAudioElement;

			if (audioElement) {
				audioElement.play();
			}
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter' || event.key === ' ') {
			addFlower();
		}
	};

	return (
		<button
			className={treeBoxStyle}
			onClick={addFlower}
			onKeyDown={handleKeyDown}
			aria-label='Press space or enter to play a chime and add a flower to the tree.'
		>
			<audio id='clickSound'>
				<source src={chime}></source>
				Your browser does not support the audio element.
			</audio>
			<img
				src={tree}
				alt={`Drawing of a bonsai tree${flowerProps.length === 1 ? ' with a light pink flower on it'
					: flowerProps.length > 0 ? ' with light pink flowers on it' : ''}`}
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
		</button>
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
		left: `${dX}px`,
		top: `${dY}px`,
		rotate: `${rotation}deg`,
		'@media(prefers-reduced-motion: no-preference)': {
			animation: `${spinAnimation} 0.5s ease-in-out`
		},
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