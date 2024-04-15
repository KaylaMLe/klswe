import React from 'react';
import { NOT_FOUND_ERROR } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function NotFoundError(): React.JSX.Element {
	return (
		<Page pageNumber={NOT_FOUND_ERROR.pageNumber} title='Not Found'>
			<h2>404: Page Not Found</h2>
			<a href='/'>Click here to go to the home page.</a>
		</Page>
	);
}