import {
  SET_ALL_REVENUES,
  SET_ALL_AVG_REVENUES,
  SET_NUMBER_CUSTOMERS,
  SET_COUNTRIES,
  SET_DATETIME,
} from 'redux/transactions/transactionType';

const initialState = {
  revenues: 0,
  avgRevenues: 0,
  customers: 0,
  countries: [],
  datetime: [],
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_REVENUES:
      return {
        ...state,
        revenues: action.details,
      };
    case SET_ALL_AVG_REVENUES:
      return {
        ...state,
        avgRevenues: action.details,
      };
    case SET_NUMBER_CUSTOMERS:
      return {
        ...state,
        customers: action.details,
      };
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.details,
      };
    case SET_DATETIME:
      return {
        ...state,
        datetime: action.details,
      };
    default:
      return state;
  }
};

export default transactionReducer;
