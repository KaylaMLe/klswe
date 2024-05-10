import React from 'react';
import { css, CSSObject } from '@emotion/css';
import { ResponsiveProps } from '../../types/ResponsiveComponentTypes';
import { useIsMobile } from '../../hooks/ViewPortContext';

export function ResponsiveComponent({
	Component,
	styles,
	children,
	...props
}: React.PropsWithChildren<ResponsiveProps>): React.JSX.Element {
	const { isMobile } = useIsMobile();

	const style: CSSObject = isMobile ? { ...styles.default, ...styles.alternate }
		: styles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
