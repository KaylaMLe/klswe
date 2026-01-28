import { CSSObject } from '@emotion/react';
import { DynamicStyles } from '../../types/StyleTypes';

export const contentStyle: CSSObject = {
    height: '100%',
    width: '100%',
};

export const pageStyles: DynamicStyles = {
    default: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        width: '100vw',
        minHeight: '100vh',
        boxSizing: 'border-box',
        gap: '5vmin',
        padding: '5vmin',
    },
    alternate: {},
    home: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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
