import React from 'react';
import { IEvent } from '../components/Calender/EventForm';

interface IAppState {
  dateContext: moment.Moment;
  listOfMonths: Array<string>;
  month: string;
  year: string;
  events: Array<IEvent>;
}
interface IAppActions {
  setDateContext: React.Dispatch<React.SetStateAction<moment.Moment>>;
  onChangeMonth: (value: string) => void;
  onChangeYear: (value: string) => void;
  addEvent: (data: any) => void;
}

export interface IAppContext {
  state: IAppState;
  actions: IAppActions;
}

export default React.createContext<IAppContext>({} as IAppContext);
