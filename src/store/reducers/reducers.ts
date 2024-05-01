import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import dataReducer from './dataSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;