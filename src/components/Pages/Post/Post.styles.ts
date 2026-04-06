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
    width: '80vw',
    minWidth: '100%',

    a: {
        color: '#2E69FF',
        ':visited': {
            color: '#8052FF'
        }
    },
    th: {
        outline: '1px solid #F4F0FF',
        backgroundColor: '#2E2E2E',
        padding: '1rem'
    },
    td: {
        outline: '1px solid #F4F0FF',
        backgroundColor: '#525252',
        padding: '0.5rem 1rem 0.5rem 1rem',
    }
};

export const contentStyle: DynamicStyles = {
    default: {
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
