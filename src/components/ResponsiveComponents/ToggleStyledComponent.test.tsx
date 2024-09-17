import { css } from '@emotion/css';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ToggleStyledComponent } from './ToggleStyledComponent';
import { DynamicStyles } from '../../types/StyleTypes';

describe('ToggleStyledComponent', () => {
	const dynamicStyles: DynamicStyles = {
		default: {
			backgroundColor: 'blue',
		},
		alternate: {
			backgroundColor: 'red',
		},
	};

	it('renders with default style when condition is false', async () => {
		render(
			<ToggleStyledComponent
				Component={'div'}
				condition={false}
				styles={dynamicStyles}
			>
				Test Children
			</ToggleStyledComponent>
		);

		const element = screen.getByText('Test Children');
		expect(element).toHaveClass(css({
			...dynamicStyles.default,
			transition: 'background-color 0.5s ease',
			':hover, :focus-visible': dynamicStyles.alternate,
		}));
	});

	it('renders with alternate style when condition is true', () => {
		render(
			<ToggleStyledComponent
				Component={'div'}
				condition={true}
				styles={dynamicStyles}
			>
				Test Children
			</ToggleStyledComponent>
		);

		const element = screen.getByText('Test Children');
		expect(element).toHaveClass(css(dynamicStyles.alternate));
	});
});