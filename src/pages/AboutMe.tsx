import { css } from "@emotion/css";
import { ReactElement } from "react";
import { NavBar } from "../NavBar";

export function AboutMe(): ReactElement {
	return (
		<div>
			<NavBar />
			<TextBox />
		</div>
	);
}

function TextBox(): ReactElement {
	const textBoxStyle = css({
		color: '#A3A3FF',
		borderRadius: '0.1rem',
		backgroundColor: '#00007A',
		boxShadow: '0 0 5px 5px #00007A',
		marginTop: '4px',
		marginLeft: '2px',
		marginRight: '2px',
		padding: '1rem',
	});

	return <div className={textBoxStyle}>Hi!</div>;
}