import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, RadioGroup, FormControlLabel, Radio, Button, Box } from '@material-ui/core';
import styled from 'styled-components';
import AppContext from '../../context/AppContext';

export default function EventForm(props: {
	onAddEventOrReminder: (value: any) => void;
	onClose: () => void;
	context: moment.Moment;
}) {
	const { register, handleSubmit, control } = useForm({
		defaultValues: {
			title: '',
			description: '',
			type: 'event',
			start: '',
			end: ''
		}
	});
	const {
		state: { dateContext }
  } = useContext(AppContext);
  
	const onSubmit = (data: any) => {
		data.date = props.context?.format?.();
		props.onAddEventOrReminder(data);
		props.onClose();
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<TextField name='title' inputRef={register} variant='outlined' label='Title' margin='dense' />
			<TextField
				name='description'
				inputRef={register}
				variant='outlined'
				label='Description'
				margin='dense'
				multiline
				rows={3}
			/>
			<Controller
				name='type'
				control={control}
				render={formProps => (
					<EventTypeField {...formProps}>
						<FormControlLabel value='event' control={<Radio color='primary' />} label='Event' />
						<FormControlLabel value='reminder' control={<Radio color='primary' />} label='Reminder' />
					</EventTypeField>
				)}
			/>
			<TextField
				name='start'
				type='time'
				inputRef={register}
				variant='outlined'
				label='Start Time'
				margin='dense'
				InputLabelProps={{
					shrink: true
				}}
			/>
			<TextField
				name='end'
				type='time'
				inputRef={register}
				variant='outlined'
				label='End Time'
				margin='dense'
				InputLabelProps={{
					shrink: true
				}}
			/>

			<Box display='grid' gridGap='12px' gridTemplateColumns='repeat(2, 1fr)'>
				<Button color='primary' variant='outlined' size='small' onClick={() => props.onClose()}>
					Cancel
				</Button>
				<Button color='primary' variant='contained' size='small' type='submit'>
					Submit
				</Button>
			</Box>
		</Form>
	);
}

const EventTypeField = styled(RadioGroup)`
	display: flex;
	flex-direction: row !important;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
