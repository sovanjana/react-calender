import React, { useContext } from 'react';
import { Button, Menu, MenuItem, Icon, Box } from '@material-ui/core';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

export default function MonthSelector() {
	const {
		state: { listOfMonths },
		actions: { onChangeMonth }
	} = useContext(AppContext);
	
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const handleSelect = (value: string) => {
		onChangeMonth(value);
		setAnchorEl(null);
	};

	return (
		<Box>
			<MonthButton aria-controls='month-selector' aria-haspopup='true' onClick={handleClick} variant='outlined'>
				Month <Icon>keyboard_arrow_down</Icon>
			</MonthButton>
			<Menu id='month-selector' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				{listOfMonths?.map(month => (
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
