import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { pageStyles } from '../styles/Pages/PageStyles';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { NavBar } from '../NavBar/NavBar';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';

export function Page({ pageNumber, title, children }
	: { pageNumber: number, title?: string, children: ReactNode }): React.JSX.Element {
	const { setCurrentPage } = useCurrentPage();

	const contentStyle = css({
		height: '100%',
		width: '100%',
	});

	useEffect(() => {
		setCurrentPage(pageNumber);

		if (title !== undefined) {
			document.title = title + ' | KL\'s Website';
		} else {
			document.title = 'KL\'s Website';
		}

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