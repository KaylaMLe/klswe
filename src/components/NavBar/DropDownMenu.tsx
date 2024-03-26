import { css, CSSObject } from '@emotion/css';
import React, { ReactNode, useState } from 'react';
import { ddBtnStyles, ddContainerStyles } from './DropDownMenuStyles';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { ToggleStyledComponent } from '../ResponsiveComponents/ToggleStyledComponent';

export function DropDownMenu({ label, children }: { label: string, children: ReactNode })
	: React.JSX.Element {
	const [expanded, setExpanded] = useState(false);

	const ddContent = css({
		color: '#16161D',
		backgroundColor: '#009483',
		border: 'none',
		borderRadius: '0.5rem',
		width: '275%',
		minWidth: '111px',
		alignItems: 'center',
		position: 'absolute',
		top: '79%',// overlays content on top of drop down button
		zIndex: '1',
	});

	const iconStyle: CSSObject = {
		marginLeft: '4px',
		transform: expanded ? 'rotate(-90deg)' : 'rotate(0deg)',
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'transform 0.5s ease',
		},
	};

	return (
		<ResponsiveNavComponent Component='nav' allStyles={ddContainerStyles}>
			<ToggleStyledComponent
				Component='button'
				label={label}
				condition={expanded}
				styles={ddBtnStyles}
				onClick={() => { setExpanded(!expanded) }}
				aria-haspopup='listbox'
				aria-expanded={expanded}
				aria-controls='dropdown1'
			>
				<div className={css(iconStyle)} role='none'>
					▼
				</div>
			</ToggleStyledComponent>
			{expanded &&
				<div className={ddContent} id='dropdown1'>
					{children}
				</div>
			}
		</ResponsiveNavComponent>
	);
}
