import { css, keyframes } from '@emotion/css';
import { ReactElement, useState } from 'react';


export function NavBar(): ReactElement {
	const navBarStyle: string = css({
		backgroundColor: '#9cadce',
		color: '#1A2131',
		boxSizing: 'border-box',
		height: '10vh',
		minHeight: '64px',
		width: '100vw',
		padding: '0.75rem',
		display: 'flex',
		alignItems: 'center',
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
		display: 'flex',
		alignItems: 'center',
	});

	const linkStyle: string = css({
		color: 'inherit',
		textDecoration: 'none',
	});

	return <h1 className={titleStyle}><a className={linkStyle} href='https://www.klswe.com'>Kayla Le</a></h1>;
}

function NavButton({ label }: { label: string }): ReactElement {
	// setting both states to false on page load prevents an animation from triggering before any
	// interactions
	const [hovered, setHovered] = useState(false);
	const [mouseLeave, setMouseLeave] = useState(false);

	// using two different animations instead of just reversing the original animation ensures that
	// the animation resets between state changes
	// otherwise, the animation will only play once per page load
	const hoverAnimation: string = keyframes`
		from {
			background-color: #C4A5E7;
			color: #1A2131;
			border-radius: '0.75rem';
		}
		to {
			background-color: #2C1450;
			color: #9FA5FF;
		}
	`;

	const reverseAnimation: string = keyframes`
		from {
			background-color: #2C1450;
			color: #9FA5FF;
		}
		to {
			background-color: #C4A5E7;
			color: #1A2131;
		}
	`;

	const navBtnStyle: string = css({
		marginLeft: '0.1rem',
		padding: '0.75rem',
		borderRadius: '1rem',
		borderStyle: 'solid',
		borderColor: '#2C1450',
		fontSize: '12pt',
		backgroundColor: hovered ? '#2C1450' : '#C4A5E7',
		color: hovered ? '#9FA5FF' : '#1A2131',
		'@media(prefers-reduced-motion: no-preference)': {
			animation: hovered ? `${hoverAnimation} 0.5s ease-in-out 0s 1 normal`
				: mouseLeave ? `${reverseAnimation} 0.5s ease-in-out 0s 1 normal` : '',
		},
	});

	return <button
		className={navBtnStyle}
		onMouseEnter={() => {
			setHovered(true);
			setMouseLeave(false);
		}}
		onMouseLeave={() => {
			setHovered(false);
			setMouseLeave(true);
		}}
	>
		{label}
	</button >;
}