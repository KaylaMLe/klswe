import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { titleStyles, linkStyles } from '../styles/NavBar/MainTitleStyles';

export function MainTitle(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	const nameStyle = css({
		margin: '0',
	});

	const headlineStyle = css({
		fontSize: '3rem',
	});

	return (
		<ResponsiveNavComponent Component='div' allStyles={titleStyles}>
			<ResponsiveNavComponent Component={Link} allStyles={linkStyles} to={HOME.link}>
				<h1 className={nameStyle}>
					Kayla Le
				</h1>
			</ResponsiveNavComponent>
			{currentPage === HOME.pageNumber && <h2 className={headlineStyle}>Software Engineer</h2>}
		</ResponsiveNavComponent>
	);
}
