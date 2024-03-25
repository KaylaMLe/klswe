import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<Home />
			</BrowserRouter>
		);
		// mocks the click sound effect
		window.HTMLMediaElement.prototype.play = jest.fn();
	});

	it('renders the home page to fit the view port', () => {
		const pageContainer = screen.getByTestId('page-container');
		const navBar = screen.getByTestId('navbar');
		const mainContent = screen.getByTestId('main-content');

		expect(mainContent.offsetWidth).toEqual(pageContainer.offsetWidth);
		expect(mainContent.offsetHeight + navBar.offsetHeight).toEqual(pageContainer.offsetHeight);
	});

	it('adds a flower to the tree after interactions', () => {
		const tree = screen.getByAltText('Digital drawing of a bonsai tree');
		expect(tree).toBeInTheDocument();

		fireEvent.click(tree);
		// The alt text changes when a flower is added to the tree
		const oneFlower = screen.getByAltText(
			'Digital drawing of a bonsai tree with a light pink flower on it');
		expect(oneFlower).toBeInTheDocument();

		fireEvent.keyDown(tree, { key: 'Enter', code: 'Enter' });
		const twoFlowers = screen.getByAltText(
			'Digital drawing of a bonsai tree with 2 light pink flowers on it');
		expect(twoFlowers).toBeInTheDocument();

		fireEvent.keyDown(tree, { key: ' ', code: 'Space' });
		const threeFlowers = screen.getByAltText(
			'Digital drawing of a bonsai tree with 3 light pink flowers on it');
		expect(threeFlowers).toBeInTheDocument();
	});

	it('mutes the sound when the mute button is clicked', () => {
		const playSpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play');

		const muteButton = screen.getByRole('button', { name: /Mute sound effects/ });
		fireEvent.click(muteButton);

		const tree = screen.getByAltText('Digital drawing of a bonsai tree');
		fireEvent.click(tree);

		expect(playSpy).not.toHaveBeenCalled();
	});
});