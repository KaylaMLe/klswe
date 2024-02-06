import { css } from "@emotion/css";
import { ReactElement } from "react";
import { NavBar } from "../NavBar";

export function AboutMe(): ReactElement {
	const pageStyle = css({
		height: '100vh',
	});

	return (
		<div className={pageStyle}>
			<NavBar />
			<TextBox />
		</div>
	);
}

function TextBox(): ReactElement {
	const textBoxStyle = css({
		backgroundColor: '#00007A',
		color: '#CCCCFF',
		boxShadow: '0 0 5px 5px #00007A',
		fontSize: '12pt',
		boxSizing: 'border-box',
		padding: '1rem',
		height: '90vh',
	});

	return <div className={textBoxStyle}>Hi!</div>;
}