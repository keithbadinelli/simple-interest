import { createSlice } from '@reduxjs/toolkit';
import calculateSimpleInterest from './calculateSimpleInterest';

const initialState = {
  total: 0,
};

export const simpleInterestSlice = createSlice({
  name: 'simpleInterest',
  initialState,
  reducers: {
    calculate: (state, action) => {
      const { principal, rate, years } = action.payload;

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.total = calculateSimpleInterest(principal, rate, years);
    },
  },
});

export const { calculate } = simpleInterestSlice.actions;

export const selectTotal = (state) => state.simpleInterest.total;

export default simpleInterestSlice.reducer;
