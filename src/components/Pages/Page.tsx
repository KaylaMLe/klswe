import { css } from '@emotion/css';
import React, { ReactNode } from 'react';
import { NavBar } from '../NavBar/NavBar';

export function Page({ children }: { children: ReactNode }): React.JSX.Element {
	const pageStyle = css({
		display: 'flex',
		flexDirection: 'column',
		height: '100vh',
		width: '100vw',
	});

	return (
		<div className={pageStyle}>
			<NavBar />
			{children}
		</div>
	);
}