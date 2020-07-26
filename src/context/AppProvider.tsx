import React, { useState } from 'react';
import moment from 'moment';
import AppContext, { IAppContext } from './AppContext';

export default function AppProvider(props: any) {
	const momentContext = moment();
	const listOfMonths = moment?.months();

	const [dateContext, setDateContext] = useState<moment.Moment>(momentContext);

	const contextValue: IAppContext = {
		state: {
      dateContext,
      listOfMonths
		},
		actions: {
      setDateContext
    }
	};
	return <AppContext.Provider value={contextValue}>{props.children}</AppContext.Provider>;
}
