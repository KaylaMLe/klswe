import { useState } from 'react';
import cookie from 'react-cookies';
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

		const response = await fetch('https://api.klswe.com/translate/translate/', {
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
		<ResponsiveComponent Component='div' allStyles={formStyles}>
			<ResponsiveComponent
				Component='textarea'
				allStyles={textBoxStyles}
				value={inputText} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
				placeholder='Enter JavaScript code to translate'
			/>
			<ResponsiveComponent
				Component='button'
				allStyles={submitBtnStyles}
				onClick={translate}
				disabled={loading}
			>
				Translate
			</ResponsiveComponent>
			<ResponsiveComponent
				Component='textarea'
				allStyles={textBoxStyles}
				value={outputText}
				readOnly
			/>
		</ResponsiveComponent>
	);
}

function getCookie(name: string): string {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = cookie.substring(name.length + 1);
                break;
            }
        }
    }
    return cookieValue;
}

