import React, { ElementType, ReactNode } from 'react';
import { css, CSSObject } from '@emotion/css';
import { useIsMobile } from '../../hooks/ViewPortContext';

export interface ResponsiveStyles {
	default: CSSObject,
	mobile: CSSObject,
};

export function ResponsiveComponent({ Component, allStyles, children, ...props }
	: {
		Component: ElementType, allStyles: ResponsiveStyles, children?: ReactNode, [prop: string]: any
	}): React.JSX.Element {
	const { isMobile } = useIsMobile();

	const style: CSSObject = isMobile ? { ...allStyles.default, ...allStyles.mobile }
		: allStyles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
