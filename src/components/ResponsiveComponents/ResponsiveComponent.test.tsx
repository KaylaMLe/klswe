import { act, fireEvent, render } from '@testing-library/react';
import { Responsive } from './ResponsiveComponent';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { DynamicStyles } from '../../types/StyleTypes';

const styles: DynamicStyles = {
	default: {
		backgroundColor: 'red',
	},
	alternate: {
		backgroundColor: 'blue',
	},
	home: {
		backgroundColor: 'green',
	},
};

// mock useCurrentPage here so that return values can be mocked in each test
jest.mock('../../hooks/PageNumberContext', () => ({
	useCurrentPage: jest.fn(),
}));

describe('Responsive', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it(
		'changes from default to alternate styles when window width is less than or equal to 600',
		() => {
			(useCurrentPage as jest.Mock).mockReturnValue({
				currentPage: -1,
				setCurrentPage: jest.fn(),
			});

			window.innerWidth = 601;
			const { container } = render(
				<Responsive Component='div' styles={styles}>
					Hello World
				</Responsive>
			);

			expect(container.firstChild).toHaveStyle('background-color: red');

			window.innerWidth = 600;

			act(() => {
				fireEvent(window, new Event('resize'));
			});

			expect(container.firstChild).toHaveStyle('background-color: blue');
		}
	);

	it('overrides home page styles when the window width is less than or equal to 600', () => {
		(useCurrentPage as jest.Mock).mockReturnValue({
			currentPage: 0,
			setCurrentPage: jest.fn(),
		});

		window.innerWidth = 601;
		const { container } = render(
			<Responsive Component='div' styles={styles}>
				Hello World
			</Responsive>
		);

		expect(container.firstChild).toHaveStyle('background-color: green');

		window.innerWidth = 600;

		act(() => {
			fireEvent(window, new Event('resize'));
		});

		expect(container.firstChild).toHaveStyle('background-color: blue');
	});
});
