import React from 'react';
import { css, CSSObject } from '@emotion/css';
import { HOME } from '../../hooks/PageNumbers';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { useIsMobile } from '../../hooks/ViewPortContext';
import { ResponsiveNavProps } from '../../types/ResponsiveComponentTypes';

// these are components rendered on all pages and have a different home page style
// e.g., the title, navbar, and overarching page component
export function ResponsiveNavComponent({ Component, styles, children, ...props }
	: React.PropsWithChildren<ResponsiveNavProps>): React.JSX.Element {
	const { isMobile } = useIsMobile();
	const { currentPage } = useCurrentPage();

	// alternate takes precedence over home
	// default is always applied but may be overridden
	const style: CSSObject = isMobile ? { ...styles.default, ...styles.alternate }
		: currentPage === HOME.pageNumber ? { ...styles.default, ...styles.home }
			: styles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
