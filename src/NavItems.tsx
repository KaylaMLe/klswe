import { css } from '@emotion/css';
import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePageNumber } from './pages/PageNumberContext';
import ddClosedDark from './assets/images/dd-closed-dark.png';
import ddClosedLight from './assets/images/dd-closed-light.png';
import dropdownOpen from './assets/images/dropdown-open.png';
import externalLink from './assets/images/external-link.png';

export function DropDownMenu({ label, children }:
	{ label: string, children: ReactNode }): React.JSX.Element {
	const [hovered, setHovered] = useState(false);
	const [expanded, setExpanded] = useState(false);

	const ddContainer = css({
		position: 'relative',
	});

	const ddBtn = css({
		backgroundColor: expanded ? '#000080' : '#A3A3FF',
		color: expanded ? '#A3A3FF' : '#000080',
		borderColor: '#000080',
		borderRadius: '0.5rem',
		borderStyle: 'solid',
		fontSize: '12pt',
		marginLeft: '0.1rem',
		padding: '0.75rem',
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'background-color 0.5s ease, color 0.5s ease',
		},
		':hover': {
			backgroundColor: '#000080',
			color: '#A3A3FF',
		},
	});

	const ddContent = css({
		backgroundColor: '#000080',
		borderRadius: '0.5rem',
		gap: '0.5rem',
		width: '15vw',
		minWidth: '128px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		position: 'absolute',
		top: '80%',// overlays content on top of drop down button
		right: '0',
		zIndex: '1',
	});

	return (
		<div className={ddContainer}>
			<button
				className={ddBtn}
				onClick={() => { setExpanded(!expanded) }}
				onMouseEnter={() => { setHovered(true) }}
				onMouseLeave={() => { setHovered(false) }}
			>
				{label}
				<img
					src={expanded ? dropdownOpen : hovered ? ddClosedLight : ddClosedDark}
					alt={expanded ? 'open dropdown menu' : 'closed dropdown menu'}
				/>
			</button>
			{expanded &&
				<div className={ddContent}>
					{children}
				</div>
			}
		</div>
	);
}

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
