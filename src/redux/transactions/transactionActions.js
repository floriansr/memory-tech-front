import { SET_TRANSACTIONS } from 'redux/transactions/transactionType';

export const setTransactions = (x) => {
  return {
    type: SET_TRANSACTIONS,
    details: x,
  };
};
