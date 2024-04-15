import React from 'react';
import { LOGIN } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function Login(): React.JSX.Element {
	return (
		<Page pageNumber={LOGIN.pageNumber} title='Login'>
			<form>
				<label htmlFor='username'>Username:</label>
				<input type='text' id='username' name='username' />
				<label htmlFor='password'>Password:</label>
				<input type='password' id='password' name='password' />
				<button type='submit'>Submit</button>
			</form>
		</Page>
	);
}