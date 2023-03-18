import { configureStore } from '@reduxjs/toolkit';
import formDataReducer from '../store/formatDataSlice';
import crashReporter from '../store/crashReporter';
import logger from '../store/logger';


const store = configureStore({
  reducer: {
    formData: formDataReducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(crashReporter, logger),
});

export default store;
