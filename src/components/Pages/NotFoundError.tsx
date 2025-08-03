/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import React from 'react';
import { NOT_FOUND_ERROR } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function NotFoundError(): React.JSX.Element {
	const errorStyle: CSSObject = {
		color: 'white',
	};

	const linkStyle: CSSObject = {
		color: '#006DFF',
		':visited': {
			color: '#9B4BF7',
		},
	};

	return (
		<Page pageNumber={NOT_FOUND_ERROR.pageNumber} title='Not Found'>
			<h2 css={errorStyle}>404: Page Not Found</h2>
			<a css={linkStyle} href='/'>Click here to go to the home page.</a>
		</Page>
	);
}