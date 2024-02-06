import { ReactElement, useState } from 'react';
import { css } from '@emotion/css';
import chime from './assets/audio/chime.mp3';
import flower from './assets/images/flower.png';
import tree from './assets/images/tree.png';
import voloff from './assets/images/voloff.png';
import volon from './assets/images/volon.png';
import { keyframes } from '@emotion/react';


interface FlowerProps {
	id: number;
	dX: number;
	dY: number;
	rotation: number;
};

export function Home(): ReactElement {
	const [muted, setMuted] = useState(false);
	const homeStyle: string = css({
		boxSizing: 'inherit',
		height: '90vh',
		minHeight: '375px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	});

	return (
		<div className={homeStyle}>
			<MuteBtn onClick={() => { setMuted(!muted) }} muted={muted} />
			<Tree muted={muted} />
		</div>
	);
}

function MuteBtn({ onClick, muted }: { onClick: () => void, muted: boolean }): ReactElement {
	const muteBtnStyle = css({
		cursor: 'pointer',
		position: 'absolute',
		top: '5px',
		left: '5px',
		width: '200px',
		fontSize: '11pt',
		backgroundColor: '#EEA8D9',
		borderRadius: '2rem',
		borderStyle: 'solid',
		borderColor: '#602267',
		padding: '8px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	});

	return (
		<button className={muteBtnStyle} onClick={onClick}>
			<img src={muted ? volon : voloff} alt='Mute all SFX' />
			{muted ? 'Unmute sound effects' : 'Mute sound effects'}
		</button>
	);
}

function Tree({ muted }: { muted: boolean }): ReactElement {
	const [flowerProps, setFlowerProps] = useState<FlowerProps[]>([]);
	const [flowerId, setFlowerId] = useState(0);

	const treeBoxStyle: string = css({
		cursor: 'pointer',
		position: 'relative',
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

	return (
		<div className={treeBoxStyle} onClick={addFlower}>
			<audio id="clickSound">
				<source src={chime}></source>
				Your browser does not support the audio element.
			</audio>
			<img src={tree} alt='A drawing of a bonsai tree' />
			{flowerProps.map(props => (
				<Flower key={props.id} id={props.id} dX={props.dX} dY={props.dY} rotation={props.rotation} />
			))}
		</div>
	);
}

function Flower({ id, dX, dY, rotation }
	: { id: number, dX: number, dY: number, rotation: number }): ReactElement {
	const spinAnimation = keyframes`
		from {
			rotate: 0deg;
		}
		to {
			rotate: ${rotation}deg;
		}
	`;

	const flowerStyle: string = css({
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
			alt='A drawing of a pink flower'
		/>
	);
}