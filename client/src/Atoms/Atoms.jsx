import {
    atom,
    selector
  } from 'recoil';
  import axios from 'axios';

  export const AmountState = atom({
    key: "amountState",
    default: 0
  })

  export const Savings = atom({
    key: "savings",
    default: 0
  })

  export const CarExpenses = atom({
    key: "carExpenses",
    default: 0
  })

  export const GetInitialData = selector({
    key: 'getInitialData',
    get: async () => {
      const response = await axios.get(`/initialData`);
      return response.data.response
    }
  });