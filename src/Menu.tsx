import { css, keyframes } from '@emotion/css';
import { ReactElement, useState } from 'react';


export function NavBar(): ReactElement {
	const navBarStyle: string = css({
		backgroundColor: '#9cadce',
		color: '#1A2131',
		boxSizing: 'border-box',
		width: '100vw',
		padding: '0.75rem',
		display: 'flex',
		justifyContent: 'space-between',
	});

	return (
		<div className={navBarStyle}>
			<MainTitle />
			<div>
				<NavButton label='About me' />
				<NavButton label='My projects' /></div>
		</div>
	);
}

function MainTitle(): ReactElement {
	const titleStyle: string = css({
		margin: 0,
	});

	return <h1 className={titleStyle}>Kayla Le</h1>;
}

function NavButton({ label }: { label: string }): ReactElement {
	const [hovered, setHovered] = useState(false);

	const hoverAnimation: string = keyframes`
		from {
			background-color: #C4A5E7;
			color: #1A2131;
		}
		to {
			background-color: #2C1450;
			color: #9FA5FF;
		}
	`;

	const navBtnStyle: string = css({
		padding: '0.75rem',
		borderStyle: 'solid',
		borderColor: '#2C1450',
		fontSize: '12pt',
		backgroundColor: hovered ? '#2C1450' : '#C4A5E7',
		color: hovered ? '#9FA5FF' : '#1A2131',
		animation: hovered ? `${hoverAnimation} 0.75s ease-in-out 0s 1` : '',
	});

	return <button
		className={navBtnStyle}
		onMouseEnter={() => { setHovered(true) }}
		onMouseLeave={() => { setHovered(false) }}
	>
		{label}
	</button >;
}