import { createSlice } from '@reduxjs/toolkit'

export const amountSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 100,
  },
  reducers: {
    withdraw: (state, action) => {

        state.value -= action.payload;
    },
    deposit: (state,action) => {
      state.value += action.payload;
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { withdraw, deposit  } = amountSlice.actions

export default amountSlice.reducer