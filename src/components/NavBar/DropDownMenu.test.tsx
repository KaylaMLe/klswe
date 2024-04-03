import { fireEvent, render, screen } from '@testing-library/react';
import { FullScreenContainer } from '../TestHelpers';
import { DropDownMenu } from './DropDownMenu';

describe('DropDownMenu', () => {
	it('renders the content when the menu button is clicked', () => {
		render(
			<FullScreenContainer>
				<DropDownMenu label='Projects'>
					<div></div>
				</DropDownMenu>
			</FullScreenContainer>
		);

		const openBtn = screen.getByText(/Projects/);
		fireEvent.click(openBtn);

		const dropDownContent = document.getElementById('dropdown1');
		expect(dropDownContent).toBeInTheDocument();
	});
});