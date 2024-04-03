import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export function pageResponsivenessTest(Component: React.JSX.Element, description?: string) {
	const displayedDesc = description ? description : 'renders properly on different display sizes';

	it(displayedDesc, () => {
		const screenSizes = [
			{ width: 1024, height: 768 },  // Standard laptop
			{ width: 375, height: 812 },   // iPhone X
		];
		const { container } = render(
			<BrowserRouter>
				{Component}
			</BrowserRouter>
		);

		for (const size of screenSizes) {
			Object.assign(container.style, {
				width: `${size.width}px`,
				height: `${size.height}px`,
			});

			expect(container).toMatchSnapshot();
		}
	});
}