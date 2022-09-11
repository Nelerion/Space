import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAPOD } from "../../Components/content/page/APOD/interfaces";
import { IAsteroids } from "../../Components/content/page/asteroids/interfaces";
import { IEPIC } from "../../Components/content/page/EPIC/interfaces";
import { IMars } from "../../Components/content/page/MarsRoverPhotos/interfaces";
import { ITechTransfer } from "../../Components/content/page/techTransfer/interfaces";

export interface STATE {
  APOD: IAPOD | undefined;
  Asteroids: IAsteroids | undefined;
  EPIC: IEPIC[] | undefined;
  Mars: {
    photos: IMars[] | undefined;
  };
  techTransfer: ITechTransfer[] | undefined;
  loading: boolean;
}

const initialState: STATE = {
  APOD: undefined,
  Asteroids: {
    count: undefined,
    links: undefined,
    earth_objects: undefined,
  },
  EPIC: undefined,
  Mars: {
    photos: undefined,
  },
  techTransfer: undefined,
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
        state.Asteroids.earth_objects = earth_objects;
        state.loading = false;
      }
    },
    fetchingEPIC: (state, { payload }: PayloadAction<IEPIC[]>) => {
      state.EPIC = payload;
      state.loading = false;
    },
    fetchingMars: (state, { payload }: PayloadAction<IMars[]>) => {
      state.Mars.photos = payload;
      state.loading = false;
    },
    fetchingMarsLoadingMore: (state, { payload }: PayloadAction<IMars[]>) => {
      state.Mars.photos = state.Mars.photos?.concat(payload);
      state.loading = false;
    },
    fetchingTechTransfer: (
      state,
      { payload }: PayloadAction<ITechTransfer[]>
    ) => {
      state.techTransfer = payload;
      state.loading = false;
    },
    isLoading: (state) => {
      state.loading = true;
    },
    isLoadingFalse: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchingAPOD,
  fetchingAsteroids,
  fetchingEPIC,
  fetchingMars,
  isLoading,
  isLoadingFalse,
  fetchingMarsLoadingMore,
  fetchingTechTransfer,
} = spaceSlice.actions;

export default spaceSlice.reducer;
