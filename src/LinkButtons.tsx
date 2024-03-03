import { css } from '@emotion/css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import externalLink from './assets/images/external-link.png';

export function ExternalLink({ text, link }: { text: string, link: string }): React.JSX.Element {
	const externalLinkStyle = css(
		{
			color: '#A3A3FF',
			marginTop: '0.5rem',
			display: 'flex',
			gap: '0.2rem',
			alignItems: 'center',
		}
	);

	return (
		<a className={externalLinkStyle} href={link}>
			{text}
			<img src={externalLink} alt='external link' />
		</a>
	);
}

export function InternalLink({ text, link, targetPage, styleFunction }:
	{
		text: string, link: string, targetPage: number,
		styleFunction: (t: number, c: number) => string
	}): React.JSX.Element {
	const navigate = useNavigate();
	const { pageNumber, setPageNumber } = usePageNumber();
	// navigate after pageNumber is set so button style updates properly
	useEffect(() => {
		if (pageNumber === targetPage) {
			navigate(link);
		}
	}, [pageNumber, link, navigate, targetPage]);

	return (
		<button
			className={styleFunction(targetPage, pageNumber)}
			onClick={() => { setPageNumber(targetPage) }}
		>
			{text}
		</button >
	);
}
