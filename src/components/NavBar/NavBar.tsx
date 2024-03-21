import { css } from '@emotion/css';
import React from 'react';
import { ABOUT_ME, FLEXBOX_FUN } from '../../hooks/PageNumbers';
import { navBarStyles, btnRowStyles } from '../styles/NavBar/NavBarStyles';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
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
	return (
		<ResponsiveNavComponent Component='nav' allStyles={navBarStyles}>
			<SkipToMain />
			<MainTitle />
			<ResponsiveNavComponent Component='div' allStyles={btnRowStyles}>
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
			</ResponsiveNavComponent>
		</ResponsiveNavComponent>
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
