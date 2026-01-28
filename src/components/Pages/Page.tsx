/** @jsxImportSource @emotion/react */
import React, { ReactNode, useEffect } from 'react';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { pageStyles } from './Page.styles';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { NavBar } from '../NavBar/NavBar';

export function Page({ pageNumber, title, children }
	: { pageNumber: number, title?: string, children: ReactNode }): React.JSX.Element {
	const { setCurrentPage } = useCurrentPage();

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	if (title) {
		document.title = title + ' | Kayla Le, Software Engineer';
	} else {
		document.title = 'Kayla Le, Software Engineer';
	}

	return (
		<Responsive Component='div' styles={pageStyles}>
			<NavBar />
			{children}
		</Responsive>
	);
}
