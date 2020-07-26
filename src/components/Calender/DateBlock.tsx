import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { Theme, Paper, Menu, MenuItem, Typography, Box } from '@material-ui/core';
import EventForm from './EventForm';

export default function DateBlock(props: { className: string; label: number; context: moment.Moment }) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [itemHover, setItemHover] = useState<boolean>(false);
	const [selectedMoment, setSelectedMoment] = useState<moment.Moment>(props.context);
	
	const handleClick = (event: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget);
		const draft = props.context.set('date', props.label);
		setSelectedMoment(draft);
	};

	const handleClose = () => setAnchorEl(null);
	const onAddEventOrReminder = (value: any) => {
		console.log(value)
	}

	return (
		<Fragment>
			<TDDays className={props.className} aria-controls='event-popup' aria-haspopup='true' onClick={handleClick}>
				<Block>
					<CalenderDay
						onMouseOver={() => setItemHover(true)}
						onMouseLeave={() => setItemHover(false)}
						elevation={itemHover ? 6 : 2}
					>
						<DayText label={props.label} />
					</CalenderDay>
				</Block>
			</TDDays>
			<EventPopup id='event-popup' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<EventForm context={selectedMoment} onClose={() => handleClose()} onAddEventOrReminder={onAddEventOrReminder} />
			</EventPopup>
		</Fragment>
	);
}

const EventPopup = styled(Menu)`
	.MuiMenu-list {
		padding: 8px 12px 12px !important;
		width: auto !important;
	}
`;
const DayText = styled(({ label, ...rest }) => <Typography variant='button' {...rest}>{label}</Typography>)`
	line-height: 1.25 !important;
`;
const TDDays = styled.td`
	width: 100px;
	height: 75px;
	${(props: { theme: Theme }) => `
		color: ${props?.theme?.palette?.primary?.main};

		&.current-day > div > .MuiPaper-root {
			background: ${props?.theme?.palette?.primary?.main};
			color: ${props?.theme?.palette?.secondary?.main};
		}
	`}
`;
const CalenderDay = styled(Paper)`
	height: initial;
	width: 100%;
	padding: 6px;
	display: table;
	display: grid;
	grid-template-rows: auto repeat(3, 1fr);
	gap: 2px;
`;
const Block = styled.div`
	display: flex;
	height: inherit;
`;
