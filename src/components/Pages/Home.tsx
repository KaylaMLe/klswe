import { css, keyframes } from '@emotion/css';
import React, { useCallback, useState } from 'react';
import { HOME } from '../../hooks/PageNumbers';
import { Responsive } from '../ResponsiveComponents/ResponsiveComponent';
import { Page } from './Page';

export default function Home(): React.JSX.Element {

	return (
		<Page pageNumber={HOME.pageNumber}>
			
		</Page>
	);
}


