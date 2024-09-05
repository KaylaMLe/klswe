import Cookies from 'js-cookie';
import { render, waitFor } from '@testing-library/react';
import { CsrfCookieProvider, useCsrfCookie } from './CsrfCookieContext';

// mock the fetch function
global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () => Promise.resolve({}),
		headers: new Headers(),
		redirected: false,
		status: 200,
		statusText: 'OK',
		type: 'basic',
		url: '',
		clone: jest.fn(),
		body: null,
		bodyUsed: false,
		arrayBuffer: jest.fn(),
		blob: jest.fn(),
		formData: jest.fn(),
		text: jest.fn(),
	})
);

// mock Cookies.get and localStorage.getItem
jest.mock('js-cookie', () => ({
	get: jest.fn(),
}));

describe('CsrfCookieContext', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('should set csrfCookie from cookies', async () => {
		// mock Cookies.get to return a CSRF token
		(Cookies.get as jest.Mock).mockReturnValue('mockFromCookies');

		const TestComponent = () => {
			const { csrfCookie } = useCsrfCookie();
			return <div>{csrfCookie}</div>;
		};

		const { getByText } = render(
			<CsrfCookieProvider>
				<TestComponent />
			</CsrfCookieProvider>
		);

		await waitFor(() => expect(getByText('mockFromCookies')).toBeInTheDocument());
	});

	test('should set csrfCookie from localStorage if not in cookies', async () => {
		// mock Cookies.get to return null and localStorage.getItem to return a CSRF token
		(Cookies.get as jest.Mock).mockReturnValue(null);
		jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue('mockFromLocalStorage');

		const TestComponent = () => {
			const { csrfCookie } = useCsrfCookie();
			return <div>{csrfCookie}</div>;
		};

		const { getByText } = render(
			<CsrfCookieProvider>
				<TestComponent />
			</CsrfCookieProvider>
		);

		await waitFor(() => expect(getByText('mockFromLocalStorage')).toBeInTheDocument());
	});

	test('should set csrfCookie from fetch if not in cookies or localStorage', async () => {
		// mock Cookies.get to return null on the first call and a string on subsequent calls
		(Cookies.get as jest.Mock).mockReturnValue('mockFromFetch');
		(Cookies.get as jest.Mock).mockReturnValueOnce(null);
		jest.spyOn(window.localStorage.__proto__, 'getItem').mockReturnValue(null);

		const TestComponent = () => {
			const { csrfCookie } = useCsrfCookie();
			return <div>{csrfCookie}</div>;
		};

		const { getByText } = render(
			<CsrfCookieProvider>
				<TestComponent />
			</CsrfCookieProvider>
		);

		await waitFor(() => expect(getByText('mockFromFetch')).toBeInTheDocument());
	});
});
