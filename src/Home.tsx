import { ReactElement, useState } from 'react';
import { css } from '@emotion/css';
import flower from './assets/images/flower.png';
import tree from './assets/images/tree.png';


interface FlowerProps {
	id: number;
	dX: number;
	dY: number;
	rotation: number;
};

export function Home(): ReactElement {
	const homeStyle: string = css({
		boxSizing: 'inherit',
		height: '90vh',
		minHeight: '375px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	});

	return (
		<div className={homeStyle}>
			<Tree />
		</div>
	);
}

function Tree(): ReactElement {
	const [flowerProps, setFlowerProps] = useState<FlowerProps[]>([]);
	const [flowerId, setFlowerId] = useState(0);

	const treeBoxStyle: string = css({
		position: 'relative',
	});

	const addFlower = () => {
		if (flowerProps.length === 50) {
			const f = flowerProps;
			f.shift();
			setFlowerProps(f);
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

		setFlowerId((flowerId + 1) % 50);
	};

	return (
		<div className={treeBoxStyle} onClick={addFlower}>
			<img src={tree} alt='A drawing of a bonsai tree' />
			{flowerProps.map(props => (
				<Flower key={props.id} id={props.id} dX={props.dX} dY={props.dY} rotation={props.rotation} />
			))}
		</div>
	);
}

function Flower({ id, dX, dY, rotation }
	: { id: number, dX: number, dY: number, rotation: number }): ReactElement {
	const flowerStyle: string = css({
		position: 'absolute',
		left: `${dX}px`,
		top: `${dY}px`,
		rotate: `${rotation}deg`,
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