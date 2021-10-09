import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./Data";
import logger from 'redux-logger';

export default configureStore({
  reducer: {
    main: dataReducer,
  },
  middleware: [logger],
});
