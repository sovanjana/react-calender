import React, { useState, useEffect, useCallback, useContext } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { chunk } from '../../utility';
import PrevArrow from '../icons/PrevArrow';
import NextArrow from '../icons/NextArrow';
import DateBlock from './DateBlock';
import { Typography, Box } from '@material-ui/core';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import AppContext from '../../context/AppContext';

export default function Calender() {
  const momentContext = moment();
  const {
    state: { dateContext, listOfMonths },
    actions: { setDateContext }
  } = useContext(AppContext);
  
  const [monthIndex, setMonthIndex] = useState(listOfMonths.indexOf(momentContext?.format('MMMM')));
  const [year, setYear] = useState(moment().format('Y'));

  useEffect(() => {
    const draftContext = Object.assign({}, dateContext);
    setDateContext(moment(draftContext).set('month', monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const draftContext = Object.assign({}, momentContext);
    setDateContext(moment(draftContext).set('year', parseInt(year)));
  }, [year]);

	const weekDaysShort = moment.weekdaysShort();
  
	const daysInMonth = () => dateContext.daysInMonth();
	const currentDay = () => dateContext.get('D');
	const firstDayOfMonth = () => moment(dateContext).startOf('month').format('d');

	const renderWeekDays = weekDaysShort.map(day => <THDays key={day} label={day} />);
	let blanks = [];
	for (let i = 0; i < parseInt(firstDayOfMonth()); i++) {
		blanks.push(<td />);
	}
	const days = [];
	for (let i = 1; i <= daysInMonth(); i++) {
		let className = i === currentDay() ? 'day current-day' : 'day';
		days.push(<DateBlock key={i} className={className} label={i} context={dateContext} />);
	}
	const totalSlots = [...blanks, ...days];
  const rows = chunk(totalSlots, 7);
  
  const onChangeMonth = (value: string) => setMonthIndex(listOfMonths.indexOf(value));
  
  const onChangeYear = (value: string) => setYear(value);
  
  const onClickPrev = useCallback(() => {
    const draftContext = Object.assign({}, dateContext);
    setDateContext(moment(draftContext).subtract(1, 'month'));
  }, [dateContext]);
  
  const onClickNext = useCallback(() => {
    const draftContext = Object.assign({}, dateContext);
    setDateContext(moment(draftContext).add(1, 'month'));
  }, [dateContext])

  const calenderTitle = `${dateContext.format('MMMM')}, ${dateContext.format('y')}`;
  
  console.log('--')

	return (
		<CalenderContainer>
			<Table>
				<thead>
					<tr key='actions'>
						<td colSpan={7}>
							<CalenderHeader>
                <Box display='grid' gridGap='12px' gridTemplateColumns='auto auto 1fr'>
                  <MonthSelector onChangeMonth={onChangeMonth} />
                  <YearSelector year={year} onChangeYear={onChangeYear} />
                </Box>
								<Box display='grid' gridTemplateColumns='auto 1fr 1fr' gridGap='18px' alignItems='center'>
									<Typography color='primary' variant='h6'>{calenderTitle}</Typography>
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
						<tr key={rowIndex}>{row}</tr>
					))}
				</tbody>
			</Table>
		</CalenderContainer>
	);
}

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
	align-items: center;
`;
const Table = styled.table`
	padding: 12px;
	border-radius: 8px;
	background: #fff;
	box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
		0px 1px 8px 0px rgba(0, 0, 0, 0.12);
`;
