/** @jsxImportSource @emotion/react */
import React, { ReactNode, useEffect } from 'react';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { containerStyles, contentStyle, pageStyles } from './Page.styles';

export function Page({ pageNumber, title, children }
	: { pageNumber: number, title?: string, children: ReactNode }): React.JSX.Element {
	const { setCurrentPage } = useCurrentPage();

	if (title !== undefined) {
		document.title = title + ' | Kayla Le, Software Engineer';
	} else {
		document.title = 'Kayla Le, Software Engineer';
	}

	useEffect(() => {
		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	return (
		<div css={containerStyles}>
			<Responsive Component='div' styles={pageStyles}>
				<div css={contentStyle} id='main' tabIndex={-1} role='none'>
					{children}
				</div>
			</Responsive>
		</div>
	);
}
