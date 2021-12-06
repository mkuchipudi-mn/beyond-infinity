import React, { useReducer } from 'react';
import loginReducer from './login.reducer';
import { Context } from '../context';
import initialState from './global.state';
import SearchCardsReducer from './searchcards.reducer';
import ApprovalsReducer from './approvals.reducer';
import NotificationsReducer from './notifications.reducer'



const combineReducers = (reducers : any) => {
  return (state : any, action : string) => {
      const tempState = { ...state };
      Object.keys(reducers).forEach((key) => {
          tempState[key] = reducers[key](tempState[key], action);
      });
      return tempState;
  };
};

export const reducer = combineReducers({
  login: loginReducer,
  approve: ApprovalsReducer,
  cards: SearchCardsReducer,
  notifications: NotificationsReducer,
});


export const Store = ({ children } : any) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default { Context, Store };