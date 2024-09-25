import React from 'react';
import { css, CSSObject } from '@emotion/css';
import { ResponsiveProps } from '../../types/ResponsiveComponentTypes';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';
import { useIsMobile } from '../../hooks/ViewPortContext';

export function ResponsiveComponent({ Component, styles, children, ...props }
	: React.PropsWithChildren<ResponsiveProps>): React.JSX.Element {
	const { isMobile } = useIsMobile();
	const { currentPage } = useCurrentPage();

	const style: CSSObject = isMobile ? { ...styles.default, ...styles.alternate }
		: styles.home && currentPage === HOME.pageNumber ? { ...styles.default, ...styles.home }
			: styles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
