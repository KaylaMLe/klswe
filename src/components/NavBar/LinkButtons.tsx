import { css } from '@emotion/css';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageType } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import externalLink from '../../assets/images/external-link.png';

export function ExternalLink({ text, link }: { text: string, link: string }): React.JSX.Element {
	const externalLinkStyle = css(
		{
			color: '#A3A3FF',
			marginTop: '0.5rem',
			display: 'flex',
			justifyContent: 'center',
			gap: '0.2rem',
			alignItems: 'center',
		}
	);

	return (
		<a
			className={externalLinkStyle}
			href={link}
			aria-label={`${text} (opens in a new tab)`}
			target='_blank'
			rel='noopener noreferrer'
		>
			{text}
			<img src={externalLink} alt='' aria-hidden={true} />
		</a>
	);
}

export function InternalLink({ text, targetPage, styleFunction }:
	{
		text: string, targetPage: PageType,
		styleFunction: (t: number, c: number) => string
	}): React.JSX.Element {
	const { currentPage } = useCurrentPage();

	return (
		<Link
			className={styleFunction(targetPage.pageNumber, currentPage)}
			to={targetPage.link}
		>
			{text}
		</Link >
	);
}
