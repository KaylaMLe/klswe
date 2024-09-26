import React from 'react';
import { css, CSSObject } from '@emotion/css';
import { ToggleProps } from '../../types/ResponsiveComponentTypes';

export function Toggle({
	Component,
	label,
	condition,
	styles,
	children,
	...props
}: React.PropsWithChildren<ToggleProps>): React.JSX.Element {
	let statefulProps: CSSObject = { ...styles.default };

	if (condition) {
		statefulProps = { ...statefulProps, ...styles.alternate };
	} else {
		// the transitions use CSS prop names (i.e. kebab-case) but CSSObject uses camelCase
		let transitions = Object.keys(styles.alternate).map(toKebabCase).join(' 0.5s ease, ');
		transitions += ' 0.5s ease';

		statefulProps['transition'] = transitions;
		statefulProps[':hover, :focus-visible'] = styles.alternate;
	}

	return (
		<Component className={css(statefulProps)} {...props}>{label}{children}</Component>
	);
}

// converts camelCase string to kebab-case by replacing capital letters with lowercase letter
// preceded by a hyphen
function toKebabCase(str: string) {
	return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
}