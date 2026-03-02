/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { navMenuStyle, navButtonStyle, hamburgerBarStyle, menuDropdownStyle, menuItemStyle } from './NavBar.styles';
import { MainTitle } from './MainTitle';
import { useCurrentPage } from '../../hooks/PageNumberContext';

export function NavBar(): React.JSX.Element {
	const [isOpen, setIsOpen] = useState(false);
	const { currentPage } = useCurrentPage();
	const bars: Array<'top' | 'middle' | 'bottom'> = ['top', 'middle', 'bottom'];

	useEffect(() => {
		setIsOpen(false);
	}, [currentPage]);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};
	//TODO: add inline dropdown for all posts?
	return (
		<nav css={navMenuStyle}>
			<MainTitle />
			<button css={navButtonStyle} onClick={handleToggle} aria-label="Toggle navigation menu">
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
					<a href="/#about-me" css={menuItemStyle}>
						About
					</a>
					<a href="/#projects-overview" css={menuItemStyle}>
						Projects
					</a>
				</div>
			)}
		</nav>
	);
}
