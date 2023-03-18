import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stockTicker: 'AAPL',
  days: 0,
  entryDate: new Date().toISOString().split('T')[0],
  expirationDate: new Date().toISOString().split('T')[0],
  exitLevel: 0,
  stockPrice: 0,
  credit: 0,
  dividend: '',
  shortStrike: 0,
  combinedProfit: 0,
  costPerShares: 0,
  ror: 0,
  breakEven: 0,
  downsideProtection: 0,
  annualizedROR: 0,
};

const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setStockTicker: (state, action) => {
      state.stockTicker = action.payload;
    },
    setEntryDate: (state, action) => {
      state.entryDate = action.payload;
    },
    setExpirationDate: (state, action) => {
      state.expirationDate = action.payload;
    },
    setUpdateDays: (state, action) => {
      state.days = action.payload;
    },
    setExitLevel: (state, action) => {
      state.exitLevel = action.payload;
    },
    setStockPrice: (state, action) => {
      state.stockPrice = action.payload;
    },
    setCombinedProfit: (state, action) => {
      state.combinedProfit = action.payload;
    },
    setCredit: (state, action) => {
      state.credit = action.payload;
    },
    setDividend: (state, action) => {
      state.dividend = action.payload;
    },
    setShortStrike: (state, action) => {
      state.shortStrike = action.payload;
    },
    setCostPerShares: (state, action) => {
      state.costPerShares = action.payload;
    },
    setROR: (state, action) => {
      state.ror = action.payload;
    },
    setBreakEven: (state, action) => {
      state.breakEven = action.payload;
    },
    setDownsideProtection: (state, action) => {
      state.downsideProtection = action.payload;
    },
    setAnnualizedROR: (state, action) => {
      state.annualizedROR = action.payload;
    },
  },
});

export const {
  setStockTicker,
  setEntryDate,
  setUpdateDays,
  setExpirationDate,
  setExitLevel,
  setStockPrice,
  setCombinedProfit,
  setCredit,
  setDividend,
  setShortStrike,
  setCostPerShares,
  setROR,
  setBreakEven,
  setDownsideProtection,
  setAnnualizedROR,
} = formDataSlice.actions;

export default formDataSlice.reducer;
