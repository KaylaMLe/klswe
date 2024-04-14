import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutMe from './AboutMe';

jest.mock('../../constants', () => ({
	__esModule: true,
	ABOUT_ME_TXT: 'Hi!',
	PORTRAIT_IMG_URL: '<rootdir>/src/assets/images/portrait-placeholder.jpg',
}));

describe('AboutMe', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<AboutMe />
			</BrowserRouter>
		);
	});

	it('renders the portrait', () => {
		const imgElement = screen.getByAltText(/Professional head shot of myself/);
		expect(imgElement).toBeInTheDocument();
	});

	it('has a highlighted navigation button', () => {
		const navBtn = screen.getByText(/About me/);
		expect(navBtn).toHaveStyle('background-color: #11D45C');
		expect(navBtn).toHaveStyle('color: #16161D');
	});
});