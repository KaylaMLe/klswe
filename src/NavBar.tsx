import { css } from '@emotion/css';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import { HOME, ABOUT_ME } from './pages/PageNumbers';
import dropdownClosed from './assets/images/dropdown-closed.png';
import externaldark from './assets/images/external-dark.png';
import externallight from './assets/images/external-light.png';

const navBtnStyle = css({
	backgroundColor: '#C4A5E7',
	color: '#2C1450',
	borderColor: '#2C1450',
	borderRadius: '1rem',
	borderStyle: 'solid',
	fontSize: '12pt',
	marginLeft: '0.1rem',
	padding: '0.75rem',
	'@media(prefers-reduced-motion: no-preference)': {
		transition: 'background-color 0.5s ease, color 0.5s ease',
	},
	':hover': {
		backgroundColor: '#2C1450',
		color: '#C4A5E7',
	},
});


export function NavBar(): React.JSX.Element {
	const navBarStyle = css({
		backgroundColor: '#9cadce',
		color: '#1A2131',
		boxShadow: '0 0 5px 5px #9cadce',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		padding: '0.75rem',
		height: '10vh',
		minHeight: '64px',
		width: '100vw',
	});

	const btnRowStyle = css({
		position: 'relative',
		display: 'flex',
		alignItems: 'flex-start',
	});

	return (
		<div className={navBarStyle}>
			<MainTitle />
			<div className={btnRowStyle}>
				<NavBtn label='About me' link='/about-me' targetPage={ABOUT_ME} />
				<ExternalBtn label='My projects' link='https://github.com/KaylaMLe' />
				<DropDownBtn label='My projects'>
					<div></div>
				</DropDownBtn>
			</div>
		</div>
	);
}

function MainTitle(): React.JSX.Element {
	const { setPageNumber } = usePageNumber();
	const navigate = useNavigate();

	const titleStyle = css({
		margin: 0,
		display: 'flex',
		alignItems: 'center',
	});

	return (
		<h1 className={titleStyle} onClick={() => {
			navigate('/');
			setPageNumber(HOME);
		}}>
			Kayla Le
		</h1>
	);
}

function NavBtn({ label, link, targetPage }:
	{ label: string, link: string, targetPage: number }): React.JSX.Element {
	const navigate = useNavigate();
	const { pageNumber, setPageNumber } = usePageNumber();
	// navigate after pageNumber is set so button style updates properly
	useEffect(() => {
		if (pageNumber === targetPage) {
			navigate(link);
		}
	}, [pageNumber, link, navigate, targetPage]);

	return (
		<button
			className={navBtnStyle}
			onClick={() => { setPageNumber(targetPage) }}
		>
			{label}
		</button >
	);
}

function ExternalBtn({ label, link }:
	{ label: string, link: string }): ReactElement {
	const [hover, setHover] = useState(false);

	return (
		<a href={link}>
			<button
				className={navBtnStyle}
				onMouseEnter={() => { setHover(true) }}
				onMouseLeave={() => { setHover(false) }}
			>
				{label}
				<img src={hover ? externallight : externaldark} />
			</button >
		</a>
	);
}

function DropDownBtn({ label, children }: { label: string, children: ReactNode }) {
	const [hover, setHover] = useState(false);

	const dropDownStyle = css({
		backgroundColor: '#A3A3FF',
		color: '#000080',
		borderColor: '#000080',
		borderRadius: '0.5rem',
		borderStyle: 'solid',
		fontSize: '12pt',
		marginLeft: '0.1rem',
		padding: '0.75rem',
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'background-color 0.5s ease, color 0.5s ease',
		},
		':hover': {
			backgroundColor: '#000080',
			color: '#A3A3FF',
		},
	});

	return (
		<div
			className={dropDownStyle}
			onMouseEnter={() => { setHover(true) }}
			onMouseLeave={() => { setHover(false) }}
		>
			{label}
			<img src={dropdownClosed} />
			{children}
		</div>
	);
}