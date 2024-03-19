import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { useIsMobile } from '../../hooks/ViewPortContext';
import { HOME } from '../../hooks/PageNumbers';

export function Page({ pageNumber, children }:
	{ pageNumber: number, children: ReactNode }): React.JSX.Element {
	const { currentPage, setCurrentPage } = useCurrentPage();
	const { isMobile } = useIsMobile();

	const pageStyle = css({
		display: 'flex',
		flexDirection: currentPage !== HOME.pageNumber || isMobile ? 'column' : 'row',
		justifyContent: 'space-between',
		height: '100vh',
		minHeight: currentPage === HOME.pageNumber ? '600px' : '',
		width: '100vw',
		position: 'relative',
	});

	const contentStyle = css({
		height: currentPage !== HOME.pageNumber || isMobile ? '100%' : 'auto',
		width: currentPage !== HOME.pageNumber || isMobile ? '100%' : '40%',
	});

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	return (
		<div className={pageStyle}>
			<NavBar />
			<div className={contentStyle} id='main' tabIndex={-1} role='none'>
				{children}
			</div>
		</div>
	);
}