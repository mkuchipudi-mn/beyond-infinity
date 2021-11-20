const ApprovalsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'APPROVE':
      return {
        ...state,
        cards: action.data,
      };
    case 'REJECT':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default ApprovalsReducer;
