import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import styled from 'styled-components';

export default function NumberFieldComponent() {
	const { handleSubmit, errors, control } = useForm({
		defaultValues: {
			number: ''
		}
	});
	const onSubmit = (data: any) => console.log(data);

	return (
		<NumberFieldForm onSubmit={handleSubmit(onSubmit)} className='field-form number-field-form'>
			<Controller
				name='number'
				control={control}
				rules={{
					required: {
						value: true,
						message: 'Required'
					}
				}}
				render={({ onChange, ...rest }) => (
					<input
						onChange={e => {
							if (/^-?\d*$/.test(e.target.value)) onChange(e.target.value);
						}}
						{...rest}
					/>
				)}
			/>

			{errors?.number?.message ? <ErrorField text={errors?.number?.message} /> : null}
			<input type='submit' />
		</NumberFieldForm>
	);
}

const ErrorField = styled(({ text }) => <span>{text}</span>)`
	position: absolute;
	bottom: -14px;
	font-size: 12px;
	color: #b40000;
`;
const NumberFieldForm = styled.form`
	position: relative;
	width: 420px;
	height: 32px;
	margin: auto;
	display: grid;
	gap: 12px;
	grid-template-columns: 1fr auto;
`;
