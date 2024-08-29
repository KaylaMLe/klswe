import { css } from '@emotion/css';
import Cookies from 'js-cookie';
import { Page } from './Page';
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
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFile(event.target.files[0]);
		}
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const csrfToken = Cookies.get('csrftoken') || '';
		
		if (csrfToken === null) {
			throw new Error('CSRF token not found. Are the Accept and X-CSRFToken headers both correctly set?');
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
					'X-CSRFToken': csrfToken,
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