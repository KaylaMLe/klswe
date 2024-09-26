import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { headlineStyle, linkStyles, nameStyle, titleStyles } from './MainTitle.styles';

export function MainTitle(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<Responsive Component='div' styles={titleStyles}>
			<Responsive Component={Link} styles={linkStyles} to={HOME.link}>
				<h1 className={css(nameStyle)}>
					Kayla Le
				</h1>
			</Responsive>
			{currentPage === HOME.pageNumber &&
				<h2 className={css(headlineStyle)}>Software Engineer</h2>
			}
		</Responsive>
	);
}
