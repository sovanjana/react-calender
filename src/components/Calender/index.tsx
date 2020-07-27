import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { chunk } from '../../utility';
import PrevArrow from '../icons/PrevArrow';
import NextArrow from '../icons/NextArrow';
import DateBlock from './DateBlock';
import { Typography, Box, Menu } from '@material-ui/core';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import AppContext from '../../context/AppContext';
import EventForm from './EventForm';

export default function Calender() {
	const {
		state: { dateContext },
		actions: { setDateContext }
	} = useContext(AppContext);

	const [blocks, setBlocks] = useState<Array<number>>([]);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [selectedDate, setSelectedDate] = useState<string>('');

	const weekDaysShort = moment.weekdaysShort();
	const currentDay = () => dateContext.get('D');

	useEffect(() => {
		const daysInMonth = () => dateContext.daysInMonth();
		const firstDayOfMonth = () => moment(dateContext).startOf('month').format('d');
		let arr: Array<number> = [];
		for (let i = 0; i < parseInt(firstDayOfMonth()); i++) {
			arr.push(0);
		}
		for (let i = 1; i <= daysInMonth(); i++) {
			arr.push(i);
		}
		setBlocks(arr);
	}, [dateContext]);

	const renderWeekDays = weekDaysShort.map(day => <THDays key={day} label={day} />);
	const rows = chunk(blocks, 7);

	const onClickPrev = () => {
		const draftContext = Object.assign({}, dateContext);
		setDateContext(moment(draftContext).subtract(1, 'month'));
	};

	const onClickNext = () => {
		const draftContext = Object.assign({}, dateContext);
		setDateContext(moment(draftContext).add(1, 'month'));
	};

	const calenderTitle = `${dateContext.format('MMMM')}, ${dateContext.format('y')}`;

	const handleClose = () => setAnchorEl(null);

	return (
		<CalenderContainer>
			<Table>
				<thead>
					<tr key='actions'>
						<td colSpan={7}>
							<CalenderHeader>
								<Box display='grid' gridGap='12px' gridTemplateColumns='auto auto 1fr'>
									<MonthSelector />
									<YearSelector />
								</Box>
								<Box display='grid' gridTemplateColumns='auto 1fr 1fr' gridGap='18px' alignItems='center'>
									<Typography color='primary' variant='h6'>
										{calenderTitle}
									</Typography>
									<PrevArrow onClick={() => onClickPrev()} />
									<NextArrow onClick={() => onClickNext()} />
								</Box>
							</CalenderHeader>
						</td>
					</tr>
					<tr key='days'>{renderWeekDays}</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row?.map((day, dayIndex) => {
								let className = day === currentDay() ? 'day current-day' : 'day';
								return day === 0 ? (
									<td />
								) : (
									<DateBlock
										key={`${rowIndex}_${dayIndex}`}
										className={className}
										label={day}
										setAnchorEl={setAnchorEl}
										setSelectedDate={setSelectedDate} />
								);
							})}
						</tr>
					))}
				</tbody>
			</Table>
			<EventPopup id='event-popup' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<EventForm selectedDate={selectedDate} onClose={() => handleClose()} />
			</EventPopup>
		</CalenderContainer>
	);
}

const EventPopup = styled(Menu)`
	.MuiMenu-list {
		padding: 8px 12px 12px !important;
		width: auto !important;
	}
`;
const CalenderHeader = styled.div`
	display: grid;
	gap: 8px;
	grid-template-columns: 1fr auto;
	margin-bottom: 12px;
`;
const THDays = styled(({ label, ...rest }) => <td {...rest}>{label}</td>)`
	background: #282c34;
	width: 100px;
	height: 40px;
	border-radius: 8px;
	text-align: center;
	color: #fff;
`;
const CalenderContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	/* align-items: center; */
`;
const Table = styled.table`
	padding: 12px;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
		0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;
