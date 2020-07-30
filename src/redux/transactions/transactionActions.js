import {
  SET_ALL_REVENUES,
  SET_ALL_AVG_REVENUES,
  SET_NUMBER_CUSTOMERS,
} from 'redux/transactions/transactionType';

export const setRevenuesAll = (x) => {
  return {
    type: SET_ALL_REVENUES,
    details: x,
  };
};

export const setAvgRevenuesAll = (x) => {
  return {
    type: SET_ALL_AVG_REVENUES,
    details: x,
  };
};

export const setNumberCustomersAll = (x) => {
  return {
    type: SET_NUMBER_CUSTOMERS,
    details: x,
  };
};
