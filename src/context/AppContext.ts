import React from 'react';

interface IAppState {
  dateContext: moment.Moment;
  listOfMonths: Array<string>;
}
interface IAppActions {
  setDateContext: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

export interface IAppContext {
  state: IAppState;
  actions: IAppActions;
}

export default React.createContext<IAppContext>({} as IAppContext);
