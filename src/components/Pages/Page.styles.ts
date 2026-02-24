import { CSSObject } from '@emotion/react';
import { DynamicStyles } from '../../types/StyleTypes';

export const contentStyle: CSSObject = {
    height: '100%',
    width: '100%',
};

export const pageStyles: DynamicStyles = {
    default: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '5vmin',
        padding: '5vmin',
    },
    alternate: {},
    home: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
};

export const containerStyles: CSSObject = {
    minHeight: '100vh',
    width: '100vw',
};

export const privacyPolicyLinkStyles: CSSObject = {
    color: '#6B6BDB',
    padding: '5vmin',
};
