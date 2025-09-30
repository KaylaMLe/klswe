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
						css={{
							...hamburgerBarStyle,
							top: i * 8 + 13.5 + 'px',
						}}
						style={{
							transform:
								bar === 'top'
									? isOpen
										? 'translateY(8px) rotate(45deg)'
										: 'none'
									: bar === 'middle'
									? isOpen
										? 'scaleX(0)'
										: 'none'
									: isOpen
									? 'translateY(-8px) rotate(-45deg)'
									: 'none',
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
