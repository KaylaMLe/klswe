import { css } from '@emotion/css';
import React, { useEffect } from 'react';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { useIsMobile } from '../../hooks/ViewPortContext';
import { HOME, ABOUT_ME, FLEXBOX_FUN } from '../../hooks/PageNumbers';
import { DropDownMenu } from './DropDownMenu';
import { ExternalLink, InternalLink } from './LinkButtons';
import { MainTitle } from './MainTitle';

function navBtnStyle(targetPage: number, currentPage: number): string {
	const navBtnStyle = css({
		backgroundColor: currentPage === targetPage ? '#2C1450' : '#C4A5E7',
		color: currentPage === targetPage ? '#C4A5E7' : '#2C1450',
		borderColor: '#2C1450',
		borderRadius: '1rem',
		borderStyle: 'solid',
		textDecoration: 'none',
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
		textDecoration: 'none',
		padding: '0.5rem',
		boxSizing: 'border-box',
		textAlign: 'center',
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
	const { currentPage } = useCurrentPage();
	const { isMobile } = useIsMobile();
	const [isHome, setIsHome] = React.useState(false);

	const navBarStyle = css({
		color: '#1A2131',
		display: 'flex',
		alignItems: 'center',
	});

	const homeStyle = css({
		paddingTop: isMobile ? '0' : '5vmin',
		paddingLeft: isMobile ? '0' : '5vmin',
		boxSizing: 'border-box',
		flexDirection: 'column',
		height: isMobile ? '50%' : '100%',
		width: isMobile ? '100%' : '60%',
	});

	const notHomeStyle = css({
		flexDirection: isMobile ? 'column' : 'row',
		justifyContent: 'space-between',
		boxSizing: 'border-box',
		paddingLeft: isMobile ? '0' : '5vmin',
		height: '20%',
		minHeight: '64px',
		width: '100%',
	});

	const btnRowStyle = css({
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: isMobile ? 'center' : isHome ? 'flex-start' : 'flex-end',
		width: isHome ? '100%' : '50%',
	});

	useEffect(() => {
		setIsHome(currentPage === HOME.pageNumber);
	}, [currentPage]);

	return (
		<div className={`${navBarStyle} ${isHome ? homeStyle : notHomeStyle}`}>
			<SkipToMain />
			<MainTitle isHome={isHome} />
			<div className={btnRowStyle}>
				<InternalLink
					text='About me'
					targetPage={ABOUT_ME}
					styleFunction={navBtnStyle}
				/>
				<DropDownMenu label='Projects'>
					<ExternalLink text='Check out my GitHub profile' link='https://github.com/KaylaMLe' />
					<InternalLink
						text='Flexbox Fun'
						targetPage={FLEXBOX_FUN}
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
		top: '55px',
		':focus': {
			left: 'auto',
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
