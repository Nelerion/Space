import { IAsteroids } from "../../../../store/slices/nasaSlice";

export interface PROPS {
  setStartDateValue: React.Dispatch<React.SetStateAction<string>>;
  setPrevDateValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface IAstrApproachData {
  orbiting_body: string;
}


