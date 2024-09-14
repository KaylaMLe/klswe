import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MockCsrfCookieProvider } from '../../hooks/MockCsrfCookieContext';
import PdfToForm from './PdfToForm';

// mock fetch with an appropriate successful response
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

// mock global URL functions used after conversion
global.URL.createObjectURL = jest.fn(() => 'mocked-url');
global.URL.revokeObjectURL = jest.fn();

describe('PdfConversionForm', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	// the download button should only be visible when there is an actual output file
	test('creates a download button after form submission', async () => {
		Object.defineProperty(window, 'location', {
			value: {
				href: 'https://klswe.com/foobar',
			},
			writable: true,
		});

		render(
			<BrowserRouter>
				<MockCsrfCookieProvider>
					<PdfToForm />
				</MockCsrfCookieProvider>
			</BrowserRouter>
		);

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

		// check if the tracking request was made
		expect(global.fetch).toHaveBeenCalledWith(
			expect.stringContaining(
				'https://api.klswe.com/traffic-tracker/form/foobar/pdf-to-form-converter'
			),
			expect.objectContaining({
				method: 'POST',
				headers: expect.objectContaining({
					'X-CSRFToken': 'mockCsrfToken',
				}),
				credentials: 'include',
			})
		);
	});
});
