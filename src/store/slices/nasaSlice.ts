import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './../store';

interface CounterState {
    value: number
  }
const initialState: CounterState = {
    value: 0,
  }

export const spaceSlice = createSlice({
  name: 'nasa',
  initialState,
  reducers: {
  },
})

// Action creators are generated for each case reducer function
export const {  } = spaceSlice.actions
export const selectCount = (state: RootState) => state.space.value

export default spaceSlice.reducer