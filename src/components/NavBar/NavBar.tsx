import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { LOGIN, ABOUT_ME, FLEXBOX_FUN, TRANSLATE, PDF_TO_FORM } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { Toggle } from '../ResponsiveComponents/ToggleStyledComponent';
import { DropDownMenu } from './DropDownMenu';
import { ExternalLink } from './LinkButtons';
import { MainTitle } from './MainTitle';
import {
	aboutMeBtnStyles,
	btnRowStyles,
	flexboxFunBtnStyles,
	navBarStyles,
	skipStyle
} from './NavBar.styles';

export function NavBar(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<Responsive Component='nav' styles={navBarStyles} data-testid='nav-bar'>
			<SkipToMain />
			<MainTitle />
			<Responsive Component='div' styles={btnRowStyles}>
				{/* <Toggle
					Component={Link}
					label='Log in'
					condition={currentPage === LOGIN.pageNumber}
					styles={aboutMeBtnStyles}
					to={LOGIN.link}
				/> */}
				<Toggle
					Component={Link}
					label='About me'
					condition={currentPage === ABOUT_ME.pageNumber}
					styles={aboutMeBtnStyles}
					to={ABOUT_ME.link}
				/>
				<DropDownMenu label='Projects'>
					<ExternalLink text='Check out my GitHub profile' link='https://github.com/KaylaMLe' />
					<Toggle
						Component={Link}
						label='Flexbox Fun'
						condition={currentPage === FLEXBOX_FUN.pageNumber}
						styles={flexboxFunBtnStyles}
						to={FLEXBOX_FUN.link}
					/>
					{/* Hidden until this page is fixed
					<Toggle
						Component={Link}
						label='Translate JS to TS'
						condition={currentPage === TRANSLATE.pageNumber}
						styles={flexboxFunBtnStyles}
						to={TRANSLATE.link}
					/> */}
					<Toggle
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
	return (
		<a
			className={css(skipStyle)}
			href='#main'
			onClick={() => { document.getElementById('main')?.focus() }}
		>
			Skip to main content
		</a>
	);
}
