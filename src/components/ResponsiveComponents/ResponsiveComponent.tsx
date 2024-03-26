import React, { ElementType, ReactNode } from 'react';
import { css, CSSObject } from '@emotion/css';
import { DynamicStyles } from '../../types/StyleTypes';
import { useIsMobile } from '../../hooks/ViewPortContext';

export function ResponsiveComponent({ Component, allStyles, children, ...props }
	: {
		Component: ElementType, allStyles: DynamicStyles, children?: ReactNode, [prop: string]: any
	}): React.JSX.Element {
	const { isMobile } = useIsMobile();

	const style: CSSObject = isMobile ? { ...allStyles.default, ...allStyles.alternate }
		: allStyles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
