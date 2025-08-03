import { CSSObject } from '@emotion/react';

export interface DynamicStyles {
	default: CSSObject,
	alternate: CSSObject,
	home?: CSSObject,
};
