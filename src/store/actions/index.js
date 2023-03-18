export const UPDATE_STOCK_PRICE = 'UPDATE_STOCK_PRICE';

export const updateStockPrice = (stockPrice) => ({
  type: UPDATE_STOCK_PRICE,
  payload: stockPrice,
});

// export const updateDays = (days) => ({
//   type: UPDATE_DAYS,
//   payload: days,
// });
