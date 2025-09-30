/** @jsxImportSource @emotion/react */
import React from 'react';
import { navMenuStyle, navButtonStyle, hamburgerBarStyle, menuDropdownStyle, menuItemStyle } from './NavBar.styles';

interface NavBarProps {
	isOpen: boolean;
	onToggle: () => void;
}

export function NavBar({ isOpen, onToggle }: NavBarProps): React.JSX.Element {
	const bars: Array<'top' | 'middle' | 'bottom'> = ['top', 'middle', 'bottom'];

	return (
		<div css={navMenuStyle}>
			<button css={navButtonStyle} onClick={onToggle} aria-label="Toggle navigation menu">
				{bars.map((bar, i) => (
					<span
						key={bar}
						css={hamburgerBarStyle}
						style={{
							transform: isOpen
								? bar === 'top'
									? 'translateY(0) rotate(45deg)'
									: bar === 'middle'
									? 'scaleX(0)'
									: 'translateY(0) rotate(-45deg)'
								: `translateY(${(i - 1) * 6}px)`,
							opacity: bar === 'middle' && isOpen ? 0 : 1,
						}}
					/>
				))}
			</button>
			{isOpen && (
				<div css={menuDropdownStyle}>
					<a href="#about" css={menuItemStyle} onClick={onToggle}>
						About
					</a>
					<a href="#projects" css={menuItemStyle} onClick={onToggle}>
						Projects
					</a>
					<a href="#contact" css={menuItemStyle} onClick={onToggle}>
						Contact
					</a>
				</div>
			)}
		</div>
	);
}
