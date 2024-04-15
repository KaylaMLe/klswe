import React from 'react';
import { css } from '@emotion/css';
import { NOT_FOUND_ERROR } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function NotFoundError(): React.JSX.Element {
	const errorStyle = css({
		color: 'white',
	});

	const linkStyle = css({
		color: '#006DFF',
		':visited': {
			color: '#9B4BF7',
		},
	});

	return (
		<Page pageNumber={NOT_FOUND_ERROR.pageNumber} title='Not Found'>
			<h2 className={errorStyle}>404: Page Not Found</h2>
			<a className={linkStyle} href='/'>Click here to go to the home page.</a>
		</Page>
	);
}