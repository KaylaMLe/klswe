import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { titleStyles, linkStyles } from './MainTitleStyles';

export function MainTitle(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	const nameStyle = css({
		lineHeight: '1',
		margin: '0',
		boxSizing: 'border-box',
		paddingBottom: '1rem',
	});

	const headlineStyle = css({
		fontSize: '3rem',
		lineHeight: '1',
		margin: '0',
		boxSizing: 'border-box',
		paddingBottom: '1rem',
	});

	return (
		<ResponsiveNavComponent Component='div' styles={titleStyles}>
			<ResponsiveNavComponent Component={Link} styles={linkStyles} to={HOME.link}>
				<h1 className={nameStyle}>
					Kayla Le
				</h1>
			</ResponsiveNavComponent>
			{currentPage === HOME.pageNumber && <h2 className={headlineStyle}>Software Engineer</h2>}
		</ResponsiveNavComponent>
	);
}
