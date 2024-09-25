import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN, ABOUT_ME, FLEXBOX_FUN, TRANSLATE, PDF_TO_FORM } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { aboutMeBtnStyles, btnRowStyles, flexboxFunBtnStyles, navBarStyles } from './NavBarStyles';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { DropDownMenu } from './DropDownMenu';
import { ExternalLink } from './LinkButtons';
import { MainTitle } from './MainTitle';
import { ToggleStyledComponent } from '../ResponsiveComponents/ToggleStyledComponent';

export function NavBar(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<Responsive Component='nav' styles={navBarStyles} data-testid='nav-bar'>
			<SkipToMain />
			<MainTitle />
			<Responsive Component='div' styles={btnRowStyles}>
				{/* <ToggleStyledComponent
					Component={Link}
					label='Log in'
					condition={currentPage === LOGIN.pageNumber}
					styles={aboutMeBtnStyles}
					to={LOGIN.link}
				/> */}
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
					{/* Hidden until this page is fixed
					<ToggleStyledComponent
						Component={Link}
						label='Translate JS to TS'
						condition={currentPage === TRANSLATE.pageNumber}
						styles={flexboxFunBtnStyles}
						to={TRANSLATE.link}
					/> */}
					<ToggleStyledComponent
						Component={Link}
						label='PDF to Form'
						condition={currentPage === PDF_TO_FORM.pageNumber}
						styles={flexboxFunBtnStyles}
						to={PDF_TO_FORM.link}
					/>
				</DropDownMenu>
			</Responsive>
		</Responsive>
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
