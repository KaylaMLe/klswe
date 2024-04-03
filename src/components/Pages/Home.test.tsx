import { fireEvent, render, screen } from '@testing-library/react';
import { pageResponsivenessTest } from '../TestHelpers';
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

	pageResponsivenessTest(<Home />);

	it('adds a flower to the tree after interactions', () => {
		const tree = screen.getByAltText('Digital drawing of a bonsai tree');
		expect(tree).toBeInTheDocument();
		const playSpy = jest.spyOn(window.HTMLMediaElement.prototype, 'play');

		fireEvent.click(tree);
		// The alt text changes and the chime is played when a flower is added to the tree
		expect(playSpy).toHaveBeenCalledTimes(1);
		const oneFlower = screen.getByAltText(
			'Digital drawing of a bonsai tree with a light pink flower on it');
		expect(oneFlower).toBeDefined();

		fireEvent.keyDown(tree, { key: 'Enter', code: 'Enter' });
		expect(playSpy).toHaveBeenCalledTimes(2);
		const twoFlowers = screen.getByAltText(
			'Digital drawing of a bonsai tree with 2 light pink flowers on it');
		expect(twoFlowers).toBeDefined();

		fireEvent.keyDown(tree, { key: ' ', code: 'Space' });
		expect(playSpy).toHaveBeenCalledTimes(3);
		const threeFlowers = screen.getByAltText(
			'Digital drawing of a bonsai tree with 3 light pink flowers on it');
		expect(threeFlowers).toBeDefined();
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