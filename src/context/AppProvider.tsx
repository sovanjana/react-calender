import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AppContext, { IAppContext } from './AppContext';
import { IEvent } from '../components/Calender/EventForm';

export default function AppProvider(props: any) {
	const momentContext = moment();
	const listOfMonths = moment?.months();

	const [dateContext, setDateContext] = useState<moment.Moment>(momentContext);
	const [month, setMonth] = useState<string>(moment().format('MMMM'));
	const [year, setYear] = useState<string>(moment().format('Y'));
	const [events, setEvents] = useState<any>({});

	useEffect(() => {
		const draftContext = Object.assign({}, dateContext);
		setDateContext(moment(draftContext).set('month', listOfMonths?.indexOf(month)));
	}, [month]);

	useEffect(() => {
		const draftContext = Object.assign({}, momentContext);
		setDateContext(moment(draftContext).set('year', parseInt(year)));
	}, [year]);

	const onChangeMonth = (value: string) => setMonth(value);

	const onChangeYear = (value: string) => setYear(value);

	const addEvent = (data: IEvent) => {
		if (data?.createdOn) {
			setEvents(Object.assign({}, { ...events }, { [data?.createdOn] : data }))
		}
	}

	console.log('--');

	const contextValue: IAppContext = {
		state: {
			dateContext,
			listOfMonths,
			month,
			year,
			events
		},
		actions: {
			setDateContext,
			onChangeMonth,
			onChangeYear,
			addEvent
		}
	};
	return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}
