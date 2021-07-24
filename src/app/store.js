import { configureStore } from '@reduxjs/toolkit';
import simpleInterestReducer from '../features/simple-interest-calculator/simpleInterestSlice';

export const store = configureStore({
  reducer: {
    simpleInterest: simpleInterestReducer,
  },
});
