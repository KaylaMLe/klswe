import { css, CSSObject } from '@emotion/css';
import React, { ReactNode, useState } from 'react';
import ddClosedDark from '../../assets/images/dd-closed-dark.png';
import ddClosedLight from '../../assets/images/dd-closed-light.png';
import dropdownOpen from '../../assets/images/dropdown-open.png';
import { ddBtnStyles, ddContainerStyles } from '../styles/NavBar/DropDownMenuStyles';
import { ResponsiveNavComponent } from '../ResponsiveComponents/ResponsiveNavComponent';
import { ToggleStyledComponent } from '../ResponsiveComponents/ToggleStyledComponent';

export function DropDownMenu({ label, children }: { label: string, children: ReactNode })
	: React.JSX.Element {
	const [hovered, setHovered] = useState(false);
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

	const iconBoxStyle = css({
		position: 'relative',
		height: '16px',
		width: '16px',
	});

	const iconStyle: CSSObject = {
		opacity: hovered ? 0 : 1,
		'@media(prefers-reduced-motion: no-preference)': {
			transition: 'opacity 0.5s ease',
		},
	};

	const iconPositionStyle: CSSObject = {
		position: 'absolute',
		top: '0',
		right: '0',

	};

	// preloading icon to prevent jittering when dropdown is opened for the first time after page load
	const preloadedIcon = new Image();
	preloadedIcon.src = dropdownOpen;

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
				onMouseEnter={() => { setHovered(true) }}
				onMouseLeave={() => { setHovered(false) }}
			>
				{expanded ? <img src={preloadedIcon.src} alt={'dropdown'} /> :
					<div className={iconBoxStyle}>
						<img
							className={css(iconPositionStyle)}
							src={ddClosedDark}
							role='none'
						/>
						<img
							className={css({ ...iconPositionStyle, ...iconStyle })}
							src={ddClosedLight}
							alt={'dropdown'}
						/>
					</div>
				}
			</ToggleStyledComponent>
			{expanded &&
				<div className={ddContent} id='dropdown1'>
					{children}
				</div>
			}
		</ResponsiveNavComponent>
	);
}
