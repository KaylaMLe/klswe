import { useState } from 'react';
import { TRANSLATE } from '../../hooks/PageNumbers';
import { formStyles, submitBtnStyles, textBoxStyles } from './TranslateStyles';
import { Page } from './Page';
import { ResponsiveComponent } from '../ResponsiveComponents/ResponsiveComponent';

export default function Translate(): React.JSX.Element {
	return (
		<Page pageNumber={TRANSLATE.pageNumber}>
			<TranslateForm />
		</Page>
	);
}


function TranslateForm(): React.JSX.Element {
	const [inputText, setInputText] = useState('');
	const [outputText, setOutputText] = useState('');
	const [loading, setLoading] = useState(false);

	const translate = async () => {
		setLoading(true);

		const csrfToken = getCookie('csrftoken');

		if (csrfToken === null) {
			setOutputText('An error ocurred while trying to load the translation.');
			setLoading(false);
			throw new Error('CSRF token not found');
		}

		const response = await fetch('https://api.klswe.com/translate/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': csrfToken,
			},
			credentials: 'include',
			body: JSON.stringify({ code: inputText }),
		});

		const data = await response.text();
		setOutputText(data);
		setLoading(false);
	};

	return (
		<ResponsiveComponent Component='div' styles={formStyles}>
			<ResponsiveComponent
				Component='textarea'
				styles={textBoxStyles}
				value={inputText} onChange={
					(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)
				}
				placeholder='Enter JavaScript code to translate'
			/>
			<ResponsiveComponent
				Component='button'
				styles={submitBtnStyles}
				onClick={translate}
				disabled={loading}
			>
				{loading ? 'Loading...' : 'Translate'}
			</ResponsiveComponent>
			<ResponsiveComponent
				Component='textarea'
				styles={textBoxStyles}
				value={outputText}
				readOnly
			/>
		</ResponsiveComponent>
	);
}

function getCookie(name: string) {
	let cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		const cookies = document.cookie.split(';');
		for (let i = 0; i < cookies.length; i++) {
			const cookie = cookies[i].trim();
			// Does this cookie string begin with the name we want?
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}
