import React from 'react';
import { Button, Menu, MenuItem, Icon, Box } from '@material-ui/core';
import styled from 'styled-components';
import moment from 'moment';

export default function MonthSelector(props: { onChangeMonth: (value: string) => void }) {
	const months = moment.months();	
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleSelect = (value: string) => {
		props.onChangeMonth(value);
		setAnchorEl(null);
	};

	return (
		<Box>
			<MonthButton aria-controls='month-selector' aria-haspopup='true' onClick={handleClick} variant='outlined'>
				Month <Icon>keyboard_arrow_down</Icon>
			</MonthButton>
			<Menu id='month-selector' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{months?.map(month => (
					<MenuItem key={month} onClick={() => handleSelect(month)}>
						{month}
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}

const MonthButton = styled(Button)`
	padding: 3px 4px 3px 10px !important;
`;
