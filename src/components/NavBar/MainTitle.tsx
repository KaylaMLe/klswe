import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { titleStyles, linkStyles } from './MainTitle.styles';

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
		<Responsive Component='div' styles={titleStyles}>
			<Responsive Component={Link} styles={linkStyles} to={HOME.link}>
				<h1 className={nameStyle}>
					Kayla Le
				</h1>
			</Responsive>
			{currentPage === HOME.pageNumber && <h2 className={headlineStyle}>Software Engineer</h2>}
		</Responsive>
	);
}
