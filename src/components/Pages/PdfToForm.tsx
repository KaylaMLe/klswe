import { css } from '@emotion/css';
import { useEffect, useState } from 'react';
import { useCsrfCookie } from '../../hooks/CsrfCookieContext';
import { PDF_TO_FORM } from '../../hooks/PageNumbers';
import { Page } from './Page';
import { formStyles } from './PdfToForm.styles';
import { DEFAULT_TARGET_CHARS, EnabledWidget, TargetChar } from './TargetChars';
import { getCurrentPage } from './utils';

export default function PdfToForm(): React.JSX.Element {
	return (
		<Page pageNumber={PDF_TO_FORM.pageNumber} title='PDF to Form Converter'>
			<PdfConversionForm />
		</Page>
	);
}

function PdfConversionForm(): React.JSX.Element {
	const { csrfCookie } = useCsrfCookie();
	const [file, setFile] = useState<File | null>(null);
	const [convertedUrl, setConvertedUrl] = useState<string | null>(null);
	const [targetChars, setTargetChars] = useState<TargetChar[]>(DEFAULT_TARGET_CHARS);

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
		const enabledWidgets: EnabledWidget[] = [];

		targetChars.forEach((char) => {
			if (char.isEnabled) {
				enabledWidgets.push({ 'name': char.name, 'char': char.char });
			}
		});

		formData.append('targetChars', JSON.stringify(enabledWidgets));

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

			if (convertedUrl) {
				window.URL.revokeObjectURL(convertedUrl);
			}

			setConvertedUrl(url);

			const currentPage = getCurrentPage();

			if (currentPage) {
				const trackerResponse = await fetch(
					'https://api.klswe.com/traffic-tracker/form/' + currentPage + 'pdf-to-form-converter/',
					{
						method: 'POST',
						headers: { 'X-CSRFToken': csrfCookie },
						credentials: 'include',
					}
				);

				if (!trackerResponse.ok) {
					console.warn('Failed to track form submission.\n' + trackerResponse.statusText);
				}
			}
		} catch (error) {
			console.error('Error during file upload:', error);
		}
	};

	const handleCharUpdate = (index: number, updatedChar: TargetChar) => {
		const updatedChars = [...targetChars];
		updatedChars[index] = updatedChar;
		setTargetChars(updatedChars);
	};

	useEffect(() => {
		return () => {
			if (convertedUrl) {
				window.URL.revokeObjectURL(convertedUrl);
			}
		};
	}, [convertedUrl]);

	return (
		<div className={css(formStyles)}>
			<form className={css(formStyles)} onSubmit={handleSubmit}>
				<label>Select characters to convert to interactive widgets.</label>
				{targetChars.map((char, index) => (
					<CharSelector
						key={index}
						targetChar={char}
						onChange={(updatedChar) => handleCharUpdate(index, updatedChar)}
					/>
				))}
				<label htmlFor='pdf-file'>Choose a PDF.</label>
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
			{convertedUrl && (
				<a
					href={convertedUrl}
					download={file?.name.replace(/\.pdf$/i, '') + `_converted.pdf`}
				>
					<button>Download Converted File</button>
				</a>
			)}
		</div>
	);
}

function CharSelector({ targetChar, onChange }
	: { targetChar: TargetChar, onChange: (updatedChar: TargetChar) => void }): React.JSX.Element {
	return (
		<div>
			<input
				type='checkbox'
				checked={targetChar.isEnabled}
				onChange={(e) => onChange({ ...targetChar, isEnabled: e.target.checked })}
			/>
			<span>{targetChar.name}</span>
			<input
				type='text'
				value={targetChar.char}
				onChange={(e) => onChange({ ...targetChar, char: e.target.value })}
			/>
		</div>
	);
}
