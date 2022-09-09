export interface ITabs {
  link: string;
  label: string;
}

export interface Props {
  startDateValue: string;
  prevDateValue: string;
  setStartDateValue: React.Dispatch<React.SetStateAction<string>>;
  setPrevDateValue: React.Dispatch<React.SetStateAction<string>>;
}
