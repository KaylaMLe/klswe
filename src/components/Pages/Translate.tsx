import Cookies from 'js-cookie';
import { useState } from 'react';
import { TRANSLATE } from '../../hooks/PageNumbers';
import { formStyles, submitBtnStyles, textBoxStyles } from './Translate.styles';
import { Page } from './Page';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';

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

		const csrfToken = Cookies.get('csrftoken') || localStorage.getItem('csrftoken');

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
		<Responsive Component='div' styles={formStyles}>
			<Responsive
				Component='textarea'
				styles={textBoxStyles}
				value={inputText} onChange={
					(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)
				}
				placeholder='Enter JavaScript code to translate'
			/>
			<Responsive
				Component='button'
				styles={submitBtnStyles}
				onClick={translate}
				disabled={loading}
			>
				{loading ? 'Loading...' : 'Translate'}
			</Responsive>
			<Responsive
				Component='textarea'
				styles={textBoxStyles}
				value={outputText}
				readOnly
			/>
		</Responsive>
	);
}
