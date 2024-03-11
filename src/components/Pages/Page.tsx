import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { useCurrentPage } from '../../hooks/PageNumberContext';

export function Page({ pageNumber, children }:
	{ pageNumber: number, children: ReactNode }): React.JSX.Element {
	const { setCurrentPage } = useCurrentPage();

	const pageStyle = css({
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '100vw',
	});

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	return (
		<div className={pageStyle}>
			<NavBar />
			<div id='main' tabIndex={-1} role='none'>
				{children}
			</div>
		</div>
	);
}