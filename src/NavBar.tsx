import { css } from '@emotion/css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import { HOME, ABOUT_ME, REACT_FUN } from './pages/PageNumbers';
import { DropDownMenu } from './DropDownMenu';
import { ExternalLink, InternalLink } from './LinkButtons';

function navBtnStyle(targetPage: number, currentPage: number): string {
	const navBtnStyle = css({
		backgroundColor: currentPage === targetPage ? '#2C1450' : '#C4A5E7',
		color: currentPage === targetPage ? '#C4A5E7' : '#2C1450',
		borderColor: '#2C1450',
		borderRadius: '1rem',
		borderStyle: 'solid',
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

	return navBtnStyle;
}

function dropDownItemStyle(targetPage: number, currentPage: number): string {
	const ddItemStyle = css({
		backgroundColor: currentPage === targetPage ? '#A3A3FF' : '#000080',
		color: currentPage === targetPage ? '#000080' : '#A3A3FF',
		borderStyle: 'none',
		borderRadius: '0.5rem',
		padding: '0.5rem',
		width: '100%',
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'background-color 0.5s ease, color 0.5s ease',
		},
		':hover': {
			backgroundColor: '#A3A3FF',
			color: '#000080',
		},
	});

	return ddItemStyle;
}

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
				<InternalLink
					text='About me'
					link='/about-me'
					targetPage={ABOUT_ME}
					styleFunction={navBtnStyle}
				/>
				<DropDownMenu label='Projects'>
					<ExternalLink text='Check out my GitHub profile' link='https://github.com/KaylaMLe' />
					<InternalLink
						text='React fun'
						link='/react-fun'
						targetPage={REACT_FUN}
						styleFunction={dropDownItemStyle}
					/>
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
