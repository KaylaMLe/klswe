/** @jsxImportSource @emotion/react */
import { CSSObject } from '@emotion/react';
import React from 'react';
import { LOGIN } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function Login(): React.JSX.Element {
	const formStyle: CSSObject = {
		color: '#FFFFFF',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		alignSelf: 'center',
		gap: '1rem',
	};

	const submitBtnStyle: CSSObject = {
		backgroundColor: '#42C0FF',
		color: '#03030D',
		border: 'none',
		borderRadius: '0.25rem',
		padding: '0.5rem',
		fontSize: '1.25rem',
		width: '10rem',
		transition: 'background-color 0.34s linear',
		':hover': {
			backgroundColor: '#007EBD',
		},
	};

	return (
		<Page pageNumber={LOGIN.pageNumber} title='Login'>
			<form css={formStyle}>
				<label htmlFor='username'>Email address</label>
				<input type='text' id='username' name='username' />
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' />
				<button css={submitBtnStyle} type='submit'>Submit</button>
			</form>
		</Page>
	);
}