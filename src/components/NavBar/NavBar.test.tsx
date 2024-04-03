import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { pageResponsivenessTest } from '../TestHelpers';
import { HOME, ABOUT_ME } from '../../hooks/PageNumbers';
import { Page } from '../Pages/Page';

describe('NavBar', () => {
	// Page is a wrapper for page content that renders a NavBar above the content
	// NavBar has a different style on the home page
	pageResponsivenessTest(
		<Page pageNumber={HOME.pageNumber}><div></div></Page>,
		'renders properly on the home page'
	);

	pageResponsivenessTest(
		<Page pageNumber={ABOUT_ME.pageNumber}><div></div></Page>,
		'renders properly on a non-home page'
	);

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