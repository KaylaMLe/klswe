import React, { useEffect, useState } from 'react';
import { css, CSSObject } from '@emotion/css';
import { ResponsiveProps } from '../../types/ResponsiveComponentTypes';
import { useCurrentPage } from '../../hooks/PageNumberContext';
import { HOME } from '../../hooks/PageNumbers';

export function Responsive({ Component, styles, children, ...props }
	: React.PropsWithChildren<ResponsiveProps>): React.JSX.Element {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const { currentPage } = useCurrentPage();

	// initialize isMobile state based on window.innerWidth
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 600);
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const style: CSSObject = isMobile ? { ...styles.default, ...styles.alternate }
		: styles.home && currentPage === HOME.pageNumber ? { ...styles.default, ...styles.home }
			: styles.default;

	return (
		<Component className={css(style)} {...props}>
			{children}
		</Component>
	);
}
