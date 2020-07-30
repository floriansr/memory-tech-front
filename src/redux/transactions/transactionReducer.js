import { SET_TRANSACTIONS } from 'redux/transactions/transactionType';

const initialState = {
  revenues: 0,
  countrySelector: '',
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRANSACTIONS:
      return {
        ...state,
        revenues: action.details,
      };
    default:
      return state;
  }
};

export default transactionReducer;
