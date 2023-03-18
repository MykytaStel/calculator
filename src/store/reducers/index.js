import { UPDATE_STOCK_PRICE } from '../actions';

const initialState = {
  stockPrice: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STOCK_PRICE:
      return { ...state, stockPrice: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
