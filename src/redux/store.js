import { configureStore } from '@reduxjs/toolkit';
import handlechart from './reducer';

const store = configureStore({
  reducer: handlechart
})
export default store;