import { ReactNode } from 'react';
import { css } from '@emotion/css';
import { fireEvent, render, screen } from '@testing-library/react';
import { DropDownMenu } from './DropDownMenu';

function FullScreenContainer({ children }: { children: ReactNode }): React.JSX.Element {
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