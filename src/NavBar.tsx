import { css } from '@emotion/css';
import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import { HOME, ABOUT_ME } from './pages/PageNumbers';
import ddClosedDark from './assets/images/dd-closed-dark.png';
import ddClosedLight from './assets/images/dd-closed-light.png';
import dropdownOpen from './assets/images/dropdown-open.png';
import externalLink from './assets/images/external-link.png';

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
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
	});

	return (
		<div className={navBarStyle}>
			<SkipToMain />
			<MainTitle />
			<div className={btnRowStyle}>
				<NavBtn label='About me' link='/about-me' targetPage={ABOUT_ME} />
				<DropDownMenu label='Projects'>
					<ExternalLink text='Check out my GitHub profile' link='https://github.com/KaylaMLe' />
				</DropDownMenu>
			</div>
		</div>
	);
}

function SkipToMain(): React.JSX.Element {
	const skipStyle = css({
		color: 'black',
		position: 'absolute',
		left: '-100%',
		':focus': {
			left: 'auto',
			top: '55px',
		},
	});

	return (
		<a
			className={skipStyle}
			href='#main'
		>
			Skip to main content
		</a>
	);
}

function MainTitle(): React.JSX.Element {
	const { setPageNumber } = usePageNumber();
	const navigate = useNavigate();

	const titleStyle = css({
		cursor: 'pointer',
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

	const navBtnStyle = css({
		backgroundColor: pageNumber === targetPage ? '#2C1450' : '#C4A5E7',
		color: pageNumber === targetPage ? '#C4A5E7' : '#2C1450',
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

	return (
		<button
			className={navBtnStyle}
			onClick={() => { setPageNumber(targetPage) }}
		>
			{label}
		</button >
	);
}

function DropDownMenu({ label, children }: { label: string, children: ReactNode }): React.JSX.Element {
	const [hovered, setHovered] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const ddContainer = css({
		position: 'relative',
	});

	const ddBtn = css({
		backgroundColor: expanded ? '#000080' : '#A3A3FF',
		color: expanded ? '#A3A3FF' : '#000080',
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

	const ddContent = css({
		backgroundColor: '#000080',
		borderRadius: '0.5rem',
		padding: '0.75rem',
		width: '15vw',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-end',
		position: 'absolute',
		top: '80%',// overlays content on top of drop down button
		right: '0',
		zIndex: '1',
	});

	return (
		<div className={ddContainer}>
			<button
				className={ddBtn}
				onClick={() => { setExpanded(!expanded) }}
				onMouseEnter={() => { setHovered(true) }}
				onMouseLeave={() => { setHovered(false) }}
			>
				{label}
				<img
					src={expanded ? dropdownOpen : hovered ? ddClosedLight : ddClosedDark}
					alt={expanded ? 'open dropdown menu' : 'closed dropdown menu'}
				/>
			</button>
			{expanded &&
				<div className={ddContent}>
					{children}
				</div>
			}
		</div>
	);
}

function ExternalLink({ text, link }: { text: string, link: string }): React.JSX.Element {
	const externalLinkStyle = css(
		{
			color: '#A3A3FF',
		}
	);

	return (
		<a className={externalLinkStyle} href={link}>
			{text}
			<img src={externalLink} alt='external link' />
		</a>
	);
}