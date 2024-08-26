import PdfToForm from './PdfToForm'
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

describe('PdfToForm', () => {
	beforeEach(() => {
		render(
			<BrowserRouter>
				<PdfToForm />
			</BrowserRouter>
		);
	});

	it('can successfully submit a pdf file', () => {
		const file = new File(['pdf content'], 'test.pdf', { type: 'application/pdf' });
		const fileInput = screen.getByLabelText('PDF file input');
		const submitButton = screen.getByText('Convert');

		Object.defineProperty(fileInput, 'files', {
			value: [file],
		});

		// Click the submit button
		submitButton.click();
	});
});