import { ReactElement } from 'react';
import { css } from '@emotion/css';
import flower from './assets/images/flower.png';
import tree from './assets/images/tree.png';


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
	const treeBoxStyle: string = css({
		position: 'relative',
	});
	return (
		<div className={treeBoxStyle}>
			<img src={tree} alt='A drawing of a bonsai tree' />
		</div>
	);
}