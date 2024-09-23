import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { MockCsrfCookieProvider } from '../../hooks/MockCsrfCookieContext';
import { CurrentPageProvider, useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME, NOT_FOUND_ERROR } from '../../hooks/PageNumbers';
import { Page } from './Page';

describe('Page view tracking requests', () => {
	beforeAll(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				json: () => Promise.resolve({}),
			})
		) as jest.Mock;
	});

	afterAll(() => {
		jest.clearAllMocks();
	});

	it('should call fetch with correct URL when currentPage is valid', () => {
		Object.defineProperty(window, 'location', {
			value: {
				href: 'https://klswe.com/foobar',
			},
			writable: true,
		});

		render(
			<BrowserRouter>
				<MockCsrfCookieProvider>
					<Page pageNumber={1} title='Test Page'>Test Content</Page>
				</MockCsrfCookieProvider>
			</BrowserRouter>
		);

		expect(global.fetch).toHaveBeenCalledWith(
			'https://api.klswe.com/traffic-tracker/page/foobar/',
			expect.objectContaining({
				method: 'POST',
				headers: {
					'X-CSRFToken': 'mockCsrfToken',
				},
				credentials: 'include',
			})
		);
	});

	it('should call fetch with "home" when currentPage is empty', () => {
		Object.defineProperty(window, 'location', {
			value: {
				href: 'https://klswe.com/',
			},
			writable: true,
		});

		render(
			<BrowserRouter>
				<MockCsrfCookieProvider>
					<Page pageNumber={1} title='Test Page'>Test Content</Page>
				</MockCsrfCookieProvider>
			</BrowserRouter>
		);

		expect(global.fetch).toHaveBeenCalledWith(
			'https://api.klswe.com/traffic-tracker/page/home/',
			expect.objectContaining({
				method: 'POST',
				headers: {
					'X-CSRFToken': 'mockCsrfToken',
				},
				credentials: 'include',
			})
		);
	});

	it('should call fetch with "NOT-FOUND_" prefix when the Not Found error page is rendered',
		() => {
			Object.defineProperty(window, 'location', {
				value: {
					href: 'https://klswe.com/foobar',
				},
				writable: true,
			});

			render(
				<BrowserRouter>
					<MockCsrfCookieProvider>
						<Page pageNumber={NOT_FOUND_ERROR.pageNumber} title='Not Found'>Test Content</Page>
					</MockCsrfCookieProvider>
				</BrowserRouter>
			);

			expect(global.fetch).toHaveBeenCalledWith(
				'https://api.klswe.com/traffic-tracker/page/NOT-FOUND_foobar/',
				expect.objectContaining({
					method: 'POST',
					headers: {
						'X-CSRFToken': 'mockCsrfToken',
					},
					credentials: 'include',
				})
			);
		}
	);
});

function ShowContext(): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<div>
			<p>Current Page: {currentPage}</p>
		</div>
	);
}

describe('CurrentPageContext behavior', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<CurrentPageProvider>
					<Page pageNumber={HOME.pageNumber}>
						<ShowContext />
					</Page>
				</CurrentPageProvider>
			</BrowserRouter>
		);
	});

	it('should set current page number depending on the page number passed in', () => {
		const originalPageNumber = screen.getByText(`Current Page: ${HOME.pageNumber}`);
		expect(originalPageNumber).toBeInTheDocument();
	});
});
