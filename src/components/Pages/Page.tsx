import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { HOME } from '../../hooks/PageNumbers';
import { pageStyles } from '../styles/Pages/PageStyles';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { useIsMobile } from '../../hooks/ViewPortContext';
import { NavBar } from '../NavBar/NavBar';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';

export function Page({ pageNumber, children }:
	{ pageNumber: number, children: ReactNode }): React.JSX.Element {
	const { currentPage, setCurrentPage } = useCurrentPage();
	const { isMobile } = useIsMobile();

	const contentStyle = css({
		height: currentPage !== HOME.pageNumber || isMobile ? '100%' : 'auto',
		width: currentPage !== HOME.pageNumber || isMobile ? '100%' : '40%',
	});

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	return (
		<ResponsiveNavComponent Component='div' allStyles={pageStyles}>
			<NavBar />
			<div className={contentStyle} id='main' tabIndex={-1} role='none'>
				{children}
			</div>
		</ResponsiveNavComponent>
	);
}