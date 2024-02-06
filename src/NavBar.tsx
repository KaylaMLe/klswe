import { css } from '@emotion/css';
import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import { HOME, ABOUT_ME, MY_PROJECTS } from './pages/PageNumbers';

export function NavBar(): ReactElement {
	const navBarStyle: string = css({
		backgroundColor: '#9cadce',
		color: '#1A2131',
		boxSizing: 'border-box',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '0.75rem',
		height: '10vh',
		minHeight: '64px',
		width: '100vw',
	});

	return (
		<div className={navBarStyle}>
			<MainTitle />
			<div>
				<NavButton label='About me' link='/about-me' targetPage={ABOUT_ME} />
				<NavButton label='My projects' link='/my-projects' targetPage={MY_PROJECTS} />
			</div>
		</div>
	);
}

function MainTitle(): ReactElement {
	const { setPageNumber } = usePageNumber();
	const navigate = useNavigate();

	const titleStyle: string = css({
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

function NavButton({ label, link, targetPage }:
	{ label: string, link: string, targetPage: number }): ReactElement {
	const navigate = useNavigate();
	const { pageNumber, setPageNumber } = usePageNumber();
	// navigate after pageNumber is set so button style updates properly
	useEffect(() => {
		if (pageNumber === targetPage) {
			navigate(link);
		}
	}, [pageNumber]);

	const navBtnStyle: string = css({
		cursor: 'pointer',
		backgroundColor: pageNumber == targetPage ? '#2C1450' : '#C4A5E7',
		color: pageNumber == targetPage ? '#C4A5E7' : '#2C1450',
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