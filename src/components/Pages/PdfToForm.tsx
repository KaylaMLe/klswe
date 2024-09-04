import { css } from '@emotion/css';
import Cookies from 'js-cookie';
import { Page } from './Page';
import { useCsrfCookie } from '../../hooks/CsrfCookieContext';
import { PDF_TO_FORM } from '../../hooks/PageNumbers';
import { formStyles } from './PdfToForm.styles';
import { useState } from 'react';

export default function PdfToForm(): React.JSX.Element {
	return (
		<Page pageNumber={PDF_TO_FORM.pageNumber}>
			<PdfConversionForm />
		</Page>
	);
}

function PdfConversionForm(): React.JSX.Element {
	const { csrfCookie } = useCsrfCookie();
	const [file, setFile] = useState<File | null>(null);
	const [convertedUrl, setConvertedUrl] = useState<string | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!csrfCookie) {
			throw new Error('CSRF token is null or undefined.');
		}

		if (!file) {
			alert('Please select a PDF file to convert.');
			return;
		}

		const formData = new FormData();
		formData.append('pdf', file);

		try {
			const response = await fetch('https://api.klswe.com/pdf-to-form/', {
				method: 'POST',
				headers: {
					'Accept': 'application/pdf',
					'X-CSRFToken': csrfCookie,
				} as HeadersInit,
				credentials: 'include',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			setConvertedUrl(url);
		} catch (error) {
			console.error('Error during file upload:', error);
		}
	};

	const handleDownloadClick = () => {
		if (convertedUrl) {
			setTimeout(() => {
				window.URL.revokeObjectURL(convertedUrl);
				setConvertedUrl(null);
			}, 100);
		}
	};

	return (
		<form className={css(formStyles)} onSubmit={handleSubmit}>
			<label htmlFor='pdf-file'>Choose a PDF file to convert to a form.</label>
			<input
				aria-label='PDF file input'
				type='file'
				id='pdf-file'
				name='pdf-file'
				accept='application/pdf'
				onChange={handleFileChange}
			/>
			<button type='submit'>Convert</button>
			{convertedUrl && (
				<a
					href={convertedUrl}
					download={file?.name.replace(/\.pdf$/i, '') + `_converted.pdf`}
					onClick={handleDownloadClick}
				>
					<button>Download Converted File</button>
				</a>
			)}
		</form>
	);
}
