import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../constants', () => ({
	__esModule: true,
	ABOUT_ME_TXT: 'Hi!',
	PORTRAIT_IMG_URL: '<rootdir>/src/assets/images/portrait-placeholder.jpg',
}));

describe('AboutMe', () => {
	it('renders without crashing', () => {
		render(<BrowserRouter><AboutMe /></BrowserRouter>);
	});

	it('renders the portrait', () => {
		render(<BrowserRouter><AboutMe /></BrowserRouter>);
		const imgElement = screen.getByAltText(/Professional head shot of myself/i);
		expect(imgElement).toBeInTheDocument();
	});
});