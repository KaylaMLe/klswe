import { CSSObject } from '@emotion/css';

export interface DynamicStyles {
	default: CSSObject,
	alternate: CSSObject,
	home?: CSSObject,
};

export interface ResponsiveNavStyles extends DynamicStyles {
	home: CSSObject,
};
