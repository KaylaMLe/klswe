import { css } from '@emotion/css';
import React, { ReactNode, useEffect } from 'react';
import { useCsrfCookie } from '../../hooks/CsrfCookieContext';
import { NavBar } from '../NavBar/NavBar';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { containerStyles, pageStyles, privacyPolicyLinkStyles } from './PageStyles';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { getCurrentPage } from './utils';

export function Page({ pageNumber, title, children }
	: { pageNumber: number, title?: string, children: ReactNode }): React.JSX.Element {
	const { csrfCookie } = useCsrfCookie();
	const { setCurrentPage } = useCurrentPage();

	const contentStyle = css({
		height: '100%',
		width: '100%',
	});

	if (title !== undefined) {
		document.title = title + ' | KL\'s Website';
	} else {
		document.title = 'KL\'s Website';
	}

	useEffect(() => {
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

		setCurrentPage(pageNumber);
	}, [pageNumber, setCurrentPage]);

	return (
		<div className={css(containerStyles)}>
			<ResponsiveNavComponent Component='div' styles={pageStyles}>
				<NavBar />
				<div className={contentStyle} id='main' tabIndex={-1} role='none'>
					{children}
				</div>
			</ResponsiveNavComponent>
			<a className={css(privacyPolicyLinkStyles)} href='/privacy-policy'>Privacy Policy</a>
		</div>
	);
}
