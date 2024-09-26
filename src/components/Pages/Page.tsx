import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { useCsrfCookie } from '../../hooks/CsrfCookieContext';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { NavBar } from '../NavBar/NavBar';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { containerStyles, contentStyle, pageStyles, privacyPolicyLinkStyles } from './Page.styles';
import { getCurrentPage } from './utils';

export function Page({ pageNumber, title, children }
	: { pageNumber: number, title?: string, children: ReactNode }): React.JSX.Element {
	const { csrfCookie } = useCsrfCookie();
	const { setCurrentPage } = useCurrentPage();

	if (title !== undefined) {
		document.title = title + ' | KL\'s Website';
	} else {
		document.title = 'KL\'s Website';
	}

	useEffect(() => {
		setCurrentPage(pageNumber);

		const logPageView = async () => {
			if (csrfCookie) {
				const currentPage = getCurrentPage();

				if (currentPage) {
					fetch('https://api.klswe.com/traffic-tracker/page/' + currentPage, {
						method: 'POST',
						headers: {
							'X-CSRFToken': csrfCookie,
						},
						credentials: 'include',
					});
				}
			} else {
				console.warn('CSRF token not found. Page view not recorded.');
			}
		};

		logPageView();

	}, [pageNumber, setCurrentPage]);

	return (
		<div className={css(containerStyles)}>
			<Responsive Component='div' styles={pageStyles}>
				<NavBar />
				<div className={css(contentStyle)} id='main' tabIndex={-1} role='none'>
					{children}
				</div>
			</Responsive>
			<a className={css(privacyPolicyLinkStyles)} href='/privacy-policy'>Privacy Policy</a>
		</div>
	);
}
