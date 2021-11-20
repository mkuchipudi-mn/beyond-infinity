const SearchCardsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SEARCHCARDS':
      return {
        ...state,
        cards: action.data,
      };
    default:
      return state;
  }
};

export default SearchCardsReducer;
