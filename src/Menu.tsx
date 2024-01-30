import CSS from 'csstype';
import { ReactElement, useState } from 'react';


export function NavBar(): ReactElement {
	const navBarStyle: CSS.Properties = {
		backgroundColor: '#9cadce',
		color: '#1A2131',
		boxSizing: 'border-box',
		width: '100vw',
		padding: '0.75rem',
		display: 'flex',
		justifyContent: 'space-between',
	}

	return (
		<div style={navBarStyle}>
			<MainTitle />
			<div>
				<NavButton label='About me' />
				<NavButton label='My projects' /></div>
		</div>
	);
}

function MainTitle(): ReactElement {
	const titleStyle: CSS.Properties = {
		margin: 0,
	};

	return <h1 style={titleStyle}>Kayla Le</h1>;
}

function NavButton({ label }: { label: string }): ReactElement {
	const [hovered, setHovered] = useState(false);

	const navBtnStyle: CSS.Properties = {
		padding: '0.75rem',
		borderStyle: 'solid',
		borderColor: '#2C1450',
		fontSize: '12pt',
		color: hovered ? '#9FA5FF' : '#1A2131',
		backgroundColor: hovered ? '#2C1450' : '#C4A5E7',
	};

	return <button
		style={navBtnStyle}
		onMouseEnter={() => { setHovered(true) }}
		onMouseLeave={() => { setHovered(false) }}
	>
		{label}
	</button >;
}