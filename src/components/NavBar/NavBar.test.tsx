import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Page } from '../Pages/Page';

describe('NavBar', () => {
	// Page is a wrapper for page content that renders a NavBar above the content
	it('has a Skip to main content link that shifts focus to the main content', () => {
		render(
			<BrowserRouter>
				<Page pageNumber={-1}>
					<div></div>
				</Page>
			</BrowserRouter>
		);

		const skipLink = screen.getByText(/Skip to main content/);
		fireEvent.click(skipLink);

		const mainContent = document.getElementById('main');
		expect(document.activeElement).toEqual(mainContent);
	});
});