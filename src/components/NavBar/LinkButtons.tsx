import { css } from '@emotion/css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageType } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import externalLink from '../../assets/images/external-link.png';

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

export function InternalLink({ text, targetPage, styleFunction }:
	{
		text: string, targetPage: PageType,
		styleFunction: (t: number, c: number) => string
	}): React.JSX.Element {
	const navigate = useNavigate();
	const { currentPage, setCurrentPage } = useCurrentPage();
	// navigate after pageNumber is set so button style updates properly
	useEffect(() => {
		if (currentPage === targetPage.pageNumber) {
			navigate(targetPage.link);
		}
	}, [currentPage, navigate, targetPage]);

	return (
		<button
			className={styleFunction(targetPage.pageNumber, currentPage)}
			onClick={() => { setCurrentPage(targetPage.pageNumber) }}
		>
			{text}
		</button >
	);
}
