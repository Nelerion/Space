import { configureStore } from "@reduxjs/toolkit";
import  spaceSlice  from "./slices/nasaSlice";
import { useDispatch } from 'react-redux'

const store = configureStore({
  reducer: {
    space: spaceSlice
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

