import React from 'react';
import { Button, Menu, MenuItem, Icon, Box } from '@material-ui/core';
import styled from 'styled-components';
import moment from 'moment';

export default function YearSelector(props: { year: string; onChangeYear: (value: string) => void }) {
	const years = () => {
		const years = [];
		const dateStart = moment().subtract(100, 'y');
		const dateEnd = moment().add(100, 'y');
		while (dateEnd.diff(dateStart, 'years') >= 0) {
			years.push(dateStart.format('YYYY'));
			dateStart.add(1, 'year');
		}
		return years;
	};
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleSelect = (value: string) => {
		props.onChangeYear(value);
		setAnchorEl(null);
	};

	return (
		<Box>
			<MonthButton aria-controls='month-selector' aria-haspopup='true' onClick={handleClick} variant='outlined'>
				Year <Icon>keyboard_arrow_down</Icon>
			</MonthButton>
			<Menu id='month-selector' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{years()?.length &&
					years()?.map(year => (
						<MenuItem key={year} onClick={() => handleSelect(year)}>
							{year}
						</MenuItem>
					))}
			</Menu>
		</Box>
	);
}

const MonthButton = styled(Button)`
	padding: 3px 4px 3px 10px !important;
`;
