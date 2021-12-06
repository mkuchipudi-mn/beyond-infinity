import { LOADING_ALL_NOTIF, SET_ALL_NOTIF, SET_ERRORS } from '../redux/types';

const NotificationsReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOADING_ALL_NOTIF:
      return {
        ...state,
        notificationsLoading: true,
      }
    case SET_ALL_NOTIF:
      return {
        ...state,
        data: action.payload.data,
        notificationsLoading: true,
      };

    default:
      return state;
  }
};

export default NotificationsReducer;
