import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import PdfToForm from './PdfToForm';
import Cookies from 'js-cookie';

// mock the global fetch function and URL.createObjectURL
global.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		status: 200,
		statusText: 'OK',
		headers: new Headers(),
		redirected: false,
		type: 'basic',
		url: '',
		clone: jest.fn(),
		body: null,
		bodyUsed: false,
		arrayBuffer: jest.fn(),
		formData: jest.fn(),
		json: jest.fn(),
		text: jest.fn(),
		blob: () => Promise.resolve(new Blob(['dummy pdf content'], { type: 'application/pdf' })),
	})
);

global.URL.createObjectURL = jest.fn(() => 'mocked-url');

describe('PdfConversionForm', () => {
	beforeEach(() => {
		Cookies.get = jest.fn().mockReturnValue('dummy-csrf-token');
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('creates a download button after form submission', async () => {
		render(<BrowserRouter><PdfToForm /></BrowserRouter>);

		// simulate upload of dummy pdf
		const file = new File(['dummy pdf content'], 'test.pdf', { type: 'application/pdf' });
		const input = screen.getByLabelText('PDF file input');
		fireEvent.change(input, { target: { files: [file] } });

		// simulate form submission
		const submitButton = screen.getByText('Convert');
		fireEvent.click(submitButton);

		// wait for the download button to appear
		await waitFor(() => {
			expect(screen.getByText('Download Converted File')).toBeInTheDocument();
		});

		// check if the download link has the correct attributes
		const downloadLink = screen.getByText('Download Converted File').closest('a');
		expect(downloadLink).toHaveAttribute('href');
		expect(downloadLink).toHaveAttribute('download', 'test_converted.pdf');
	});
});