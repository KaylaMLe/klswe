import { css } from '@emotion/css';
import React, { ReactNode, useState } from 'react';
import { ddBtnStyles, ddContainerStyles, ddContentStyles, iconStyles } from './DropDownMenu.styles';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { ToggleStyledComponent } from '../ResponsiveComponents/ToggleStyledComponent';

export function DropDownMenu({ label, children }: { label: string, children: ReactNode })
	: React.JSX.Element {
	const [expanded, setExpanded] = useState(false);

	return (
		<Responsive Component='nav' styles={ddContainerStyles}>
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
				<ToggleStyledComponent Component='div' label='▼' condition={expanded} styles={iconStyles} />
			</ToggleStyledComponent>
			{expanded &&
				<div className={css(ddContentStyles)} id='dropdown1'>
					{children}
				</div>
			}
		</Responsive>
	);
}
