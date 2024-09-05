import React from 'react';
import { ContextProviderProps } from './ContextProviderProps';
import { CsrfCookieContext } from './CsrfCookieContext';

export const MockCsrfCookieProvider: React.FC<ContextProviderProps> = ({ children }) => {
	const mockCsrfCookie = 'mockCsrfToken';

	return (
		<CsrfCookieContext.Provider value={{ csrfCookie: mockCsrfCookie }}>
			{children}
		</CsrfCookieContext.Provider>
	);
};
