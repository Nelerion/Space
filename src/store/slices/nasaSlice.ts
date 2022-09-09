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
interface Iclose_approach_data {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
}

export interface Iearth_objects {
  absolute_magnitude_h: number;
  close_approach_data: Iclose_approach_data[];
  estimated_diameter: {
    feet: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    meters: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
    miles: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
}

export interface IAsteroids {
  count: number | undefined;
  links:{
        next: string;
        previous: string;
        self: string;
      }
    | undefined;
  earth_objects: Iearth_objects |Iearth_objects[]| undefined;
}
export interface STATE {
  APOD: IAPOD | undefined;
  Asteroids: IAsteroids | undefined;
  loading: boolean;
}

const initialState: STATE = {
  APOD: undefined,
  Asteroids: {
    count: undefined,
    links: undefined,
    earth_objects: undefined,
  },
  loading: false,
};

export const spaceSlice = createSlice({
  name: "nasa",
  initialState,
  reducers: {
    fetchingAPOD: (state, action: PayloadAction<IAPOD>) => {
      state.APOD = action.payload;
      state.loading = false;
    },
    fetchingAsteroids: (
      state,
      { payload: { count, links, earth_objects } }: PayloadAction<IAsteroids>
    ) => {
      if (state.Asteroids !== undefined) {
        state.Asteroids.count = count;
        state.Asteroids.links = links;
        state.Asteroids.earth_objects=earth_objects;
        state.loading = false;
      }
    },
    isLoading: (state) => {
      state.loading = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchingAPOD, fetchingAsteroids, isLoading } =
  spaceSlice.actions;
// export const APOD = (state: RootState) => state.space.APOD;
// export const Astteroids = (state: RootState) => state.space.Asteroids;

export default spaceSlice.reducer;
