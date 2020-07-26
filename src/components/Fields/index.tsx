import React from 'react';
import NumberFieldComponent from './NumberFieldComponent';
import PhoneNoFieldComponent from './PhoneNoFieldComponent';
import styled from 'styled-components';

export default function Fields() {
	return (
		<FieldsContainer>
			<NumberFieldComponent />
			<PhoneNoFieldComponent />
		</FieldsContainer>
	);
}

const FieldsContainer = styled.div`
	display: grid;
	gap: 16px;
	width: max-content;
	margin: auto;
`;