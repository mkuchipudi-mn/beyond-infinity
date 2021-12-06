import React, { useContext } from 'react';
import { LOADING_ALL_NOTIF, SET_ALL_NOTIF, SET_ERRORS } from '../types';
import NotifService from '../../services/Notif.service';
import { Context } from '../../context';




const notifService = new NotifService();

export const getAllNotifications = () => async () => {
  debugger;
  const { state, dispatch } = useContext(Context);
  dispatch({ type: LOADING_ALL_NOTIF });
  try {
    // const { user } = getState();
    // console.log(user);
    const result = await notifService.search({});
    return dispatch({
      type: SET_ALL_NOTIF,
      payload: result.data
    });
  }
  catch (error) {
    return dispatch({
      type: SET_ERRORS,
      payload: error
    });
  }
};