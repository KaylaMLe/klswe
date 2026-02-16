import { CSSObject } from '@emotion/react';
import { DynamicStyles } from '../../../types/StyleTypes';

export const titleStyle: CSSObject = {
    fontSize: '2.25rem',
    color: '#DBD3FF',
    textAlign: 'center',
};

export const bodyStyle: CSSObject = {
    fontSize: '1.25rem',
    color: '#F4F0FF',
};

export const contentStyle: DynamicStyles = {
    default: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        gap: '1rem',
        width: '65%',
    },
    alternate: {
        width: '95%',
    },
    home: {},
};
