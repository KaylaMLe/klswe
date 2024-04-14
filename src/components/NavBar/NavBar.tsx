import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_ME, FLEXBOX_FUN } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { aboutMeBtnStyles, btnRowStyles, flexboxFunBtnStyles, navBarStyles } from './NavBarStyles';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { DropDownMenu } from './DropDownMenu';
import { ExternalLink } from './LinkButtons';
import { MainTitle } from './MainTitle';
import { ToggleStyledComponent } from '../ResponsiveComponents/ToggleStyledComponent';

export function NavBar(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<ResponsiveNavComponent Component='nav' allStyles={navBarStyles} data-testid='nav-bar'>
			<SkipToMain />
			<MainTitle />
			<ResponsiveNavComponent Component='div' allStyles={btnRowStyles}>
				<ToggleStyledComponent
					Component={Link}
					label='About me'
					condition={currentPage === ABOUT_ME.pageNumber}
					styles={aboutMeBtnStyles}
					to={ABOUT_ME.link}
				/>
				<DropDownMenu label='Projects'>
					<ExternalLink text='Check out my GitHub profile' link='https://github.com/KaylaMLe' />
					<ToggleStyledComponent
						Component={Link}
						label='Flexbox Fun'
						condition={currentPage === FLEXBOX_FUN.pageNumber}
						styles={flexboxFunBtnStyles}
						to={FLEXBOX_FUN.link}
					/>
				</DropDownMenu>
			</ResponsiveNavComponent>
		</ResponsiveNavComponent>
	);
}

function SkipToMain(): React.JSX.Element {
	const skipStyle = css({
		color: 'white',
		backgroundColor: 'black',
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
			onClick={() => { document.getElementById('main')?.focus() }}
		>
			Skip to main content
		</a>
	);
}
