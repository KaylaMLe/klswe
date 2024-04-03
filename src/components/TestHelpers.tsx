import React, { ReactNode } from 'react';
import { css } from '@emotion/css';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export function FullScreenContainer({ children }: { children: ReactNode }): React.JSX.Element {
	const fullScreenStyle = css({
		height: '100%',
		width: '100%',
	});

	return (
		<div className={fullScreenStyle}>
			{children}
		</div>
	);
}

export function pageResponsivenessTest(Component: React.JSX.Element, description?: string) {
	it(description || 'renders properly on different display sizes', () => {
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