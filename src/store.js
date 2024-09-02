import { configureStore } from '@reduxjs/toolkit'
import amountReducer from './actions/AmountSlice';
export default configureStore({
  reducer: {
    amount :amountReducer,
},
})