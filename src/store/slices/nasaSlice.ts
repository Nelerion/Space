import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./../store";
export interface IAPOD {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}
export interface IAsteroids {
  count: any;
  links: any;
  earth_objects: any;
}
export interface STATE {
  APOD: IAPOD | undefined;
  Asteroids: IAsteroids | undefined;
  AstrDate: {
    startDate: number | string | undefined;
    endDate: number | string | undefined;
  };
}
const initialState: STATE = {
  APOD: undefined,
  Asteroids: undefined,
  AstrDate: {
    startDate: "2015-09-07",
    endDate: "2015-09-08",
  },
};

export const spaceSlice = createSlice({
  name: "nasa",
  initialState,
  reducers: {
    fetchingAPOD: (state, action: PayloadAction<IAPOD>) => {
      state.APOD = action.payload;
    },
    fetchingAsteroids: (state, action: PayloadAction<IAsteroids>) => {
      state.Asteroids = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchingAPOD, fetchingAsteroids } = spaceSlice.actions;
// export const APOD = (state: RootState) => state.space.APOD;
// export const Astteroids = (state: RootState) => state.space.Asteroids;

export default spaceSlice.reducer;
