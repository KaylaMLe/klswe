import { css } from '@emotion/css';
import { Page } from './Page';
import { PDF_TO_FORM } from '../../hooks/PageNumbers';
import { formStyles } from './PdfToForm.styles';
import { useState } from 'react';
import { getCookie } from './utils';

export default function PdfToForm(): React.JSX.Element {
	return (
		<Page pageNumber={PDF_TO_FORM.pageNumber}>
			<PdfConversionForm />
		</Page>
	);
}

function PdfConversionForm(): React.JSX.Element {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(document.cookie);
		let csrfTokenResponse;

		try {
			csrfTokenResponse = await fetch('https://api.klswe.com/pdf-to-form/', {
				method: 'GET',
				credentials: 'include',
			});
		} catch (error) {
			console.error('Error during CSRF token fetch:', error);
			return;
		}

		console.log(await csrfTokenResponse.text());
		console.log(document.cookie);

		if (csrfTokenResponse === null) {
			throw new Error('CSRF token not found');
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
					'X-CSRFToken': 'foobar',
				},
				credentials: 'include',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = `${file.name.replace('.pdf', '')}_converted.pdf`;
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Error during file upload:', error);
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
		</form>
	);
}
