import { css } from '@emotion/css';
import React, { ReactNode, useState } from 'react';
import { FLEXBOX_FUN } from '../../hooks/PageNumbers';
import { Page } from './Page';

export default function FlexboxFun(): React.JSX.Element {
	const [bgColor, setBgColor] = useState('#ffffff');
	const [boxColor, setBoxColor] = useState('#000000');
	const [alignment, setAlignment] = useState('baseline');
	const [justification, setJustification] = useState('center');

	const pageStyle = css({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		height: '90vh',
		width: '100vw',
	});

	const boxStyle = css({
		backgroundColor: boxColor,
		height: '50px',
		width: '50px',
	});

	const handleBgColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBgColor(e.target.value);
	};

	const handleBoxColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBoxColor(e.target.value);
	};

	const handleAlignmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setAlignment(e.target.value);
	};

	const handleJustificationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setJustification(e.target.value);
	};

	return (
		<Page pageNumber={FLEXBOX_FUN.pageNumber}>
			<div className={pageStyle}>
				<SettingsRow>
					<ColorChanger
						label='Background color'
						id='bgColorPicker'
						currentColor={bgColor}
						onChange={handleBgColorChange}
					/>
					<ColorChanger
						label='Box color'
						id='boxColorPicker'
						currentColor={boxColor}
						onChange={handleBoxColorChange}
					/>
					<SelectInput
						label='align-items'
						id='alignmentChanger'
						optionValues={['baseline', 'center', 'end', 'flex-end', 'flex-start', 'inherit',
							'initial', 'normal', 'revert', 'revert-layer', 'self-end', 'self-start', 'start',
							'stretch', 'unset']}
						currentValue={alignment}
						onChange={handleAlignmentChange}
					/>
					<SelectInput
						label='justify-content'
						id='justificationChanger'
						optionValues={['center', 'end', 'flex-end', 'flex-start', 'inherit', 'left', 'normal',
							'revert', 'revert-layer', 'right', 'space-around', 'space-between', 'space-evenly',
							'start', 'stretch', 'unset']}
						currentValue={justification}
						onChange={handleJustificationChange}
					/>
				</SettingsRow>
				<ComponentsBox bgColor={bgColor} alignItems={alignment} justifyContent={justification}>
					<div className={boxStyle}></div>
				</ComponentsBox>
			</div>
		</Page>
	);
}

function SettingsRow({ children }: { children: ReactNode }): React.JSX.Element {
	const settingsRowStyle = css({
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'center',
		gap: '1rem',
	});

	return (
		<div className={settingsRowStyle}>
			{children}
		</div>
	);
}

function ColorChanger({ label, id, currentColor, onChange }: {
	label: string,
	id: string,
	currentColor: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}): React.JSX.Element {
	const changeBgColorStyle = css({
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	});

	return (
		<div className={changeBgColorStyle}>
			<label htmlFor={id}>{label}</label>
			<input
				type='color'
				id={id}
				name={id}
				value={currentColor}
				onChange={onChange}
			/>
		</div>
	);
}

function SelectInput({ label, id, optionValues, currentValue, onChange }:
	{
		label: string, id: string, optionValues: string[], currentValue: string,
		onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
	}): React.JSX.Element {
	const selectInputStyle = css({
		display: 'flex',
		alignItems: 'center',
		gap: '0.5rem',
	});

	const options = [];

	for (const i of optionValues) {
		options.push(<option value={i}>{i}</option>);
	}

	return (
		<div className={selectInputStyle}>
			<label htmlFor={id}>{label}</label>
			<select id={id} value={currentValue} onChange={onChange}>
				{options}
			</select>
		</div>
	);
}

function ComponentsBox({ bgColor, alignItems, justifyContent, children }:
	{ bgColor: string, alignItems: string, justifyContent: string, children: ReactNode }): React.JSX.Element {
	const bgStyle = css({
		display: 'flex',
		alignItems: alignItems,
		justifyContent: justifyContent,
		backgroundColor: bgColor,
		height: '90%',
		width: '95%',
	});

	return (
		<div className={bgStyle}>
			{children}
		</div>
	);
}
