import { ContextProviderProps } from './ContextProviderProps';
import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';

interface CsrfCookieContextProps {
	csrfCookie: string | null;
}

export const CsrfCookieContext = createContext<CsrfCookieContextProps>({
	csrfCookie: null,
});

export const useCsrfCookie = () => React.useContext(CsrfCookieContext);

export const CsrfCookieProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const [csrfCookie, setCsrfCookie] = useState<string | null>(null);

	useEffect(() => {
		const fetchCsrfToken = async () => {
			const storedCsrfCookie = Cookies.get('csrftoken') || localStorage.getItem('csrftoken');

			if (storedCsrfCookie) {
				setCsrfCookie(storedCsrfCookie);
			} else {
				await fetch('https://api.klswe.com/csrf-setter/', {
					method: 'GET',
					credentials: 'include',
				});

				const fetchedCsrfCookie = Cookies.get('csrftoken') || null;
				setCsrfCookie(fetchedCsrfCookie);
			}
		}

		fetchCsrfToken();
	}, []);

	return (
		<CsrfCookieContext.Provider value={{ csrfCookie }}>
			{children}
		</CsrfCookieContext.Provider>
	);
};