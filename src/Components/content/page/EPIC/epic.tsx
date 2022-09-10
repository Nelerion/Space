import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  fetchingEPIC,
  IEPIC,
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import { useEffect, useState } from "react";
import format from "date-fns/format";
import { fetchEPIC } from "../../../header/fetch";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import {
  Epic,
  CardEpic,
  CardCoord,
  OptionCoord,
  ButtonSearchEarth,
  SearchEarth,
  FormSearchEarth,
} from "./style";
import Error from "../../../error";

const EPIC: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDate = new Date();
  const todayMonth: number = Number(isDate.getMonth());
  const todayYear: number = Number(isDate.getFullYear());
  const day: number = Number(new Date().getDate());
  const isLoad = useAppSelector((state) => state.space.loading);
  const [valueDate, setValueDate] = useState<string>("");
  const prevDate = format(
    new Date(todayYear, todayMonth, day - 2), //вчерашняя дата для адреса картинки
    "yyyy/MM/dd"
  );
  const lastDayDate = format(
    new Date(todayYear, todayMonth, day - 2), //вчерашняя дата для адреса запроса
    "yyyy-MM-dd"
  );

  const [startDateValue, setStartDateValue] = useState<string>(lastDayDate);
  const [prevDateImage, setPrevDateImage] = useState<string>(prevDate);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    dispatch(isLoading());
    fetchEPIC(startDateValue).then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((element) => {
        setError(false);
        let arr: IEPIC[] = [];
        element.map((element: IEPIC) => {
          arr.push({
            caption: element.caption,
            centroid_coordinates: element.centroid_coordinates,
            date: element.date,
            image: element.image,
          });
        });
        dispatch(fetchingEPIC(arr));
      });
    });
  }, [startDateValue]);

  const data = useAppSelector((state) => state.space.EPIC);
  const changeValueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9,-]/g, "");
    if (value === e.target.value) {
      setValueDate(e.target.value);
    }
  };
  const searchFetchImage = () => {
    setStartDateValue(valueDate); // считываем дату с поля для запроса
    setPrevDateImage(format(new Date(valueDate), "yyyy/MM/dd")); //Преобразуем дату для адреса картинок
  };

  useEffect(() => {
    if (!valueDate || 0 === valueDate.length) {
      setStartDateValue(lastDayDate);
      setPrevDateImage(prevDate);
    }
  }, [valueDate]);
  return (
    <Epic>
      <FormSearchEarth>
        <SearchEarth
          placeholder="date format YYYY-MM-DD"
          value={valueDate}
          onChange={changeValueDate}
        />
        <ButtonSearchEarth
          type="button"
          value="GO"
          onClick={searchFetchImage}
        />
      </FormSearchEarth>
      {isLoad && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error && <Error />}
      {data?.map((card: IEPIC) => (
        <CardEpic key={card.image}>
          <CardActionArea>
            <a
              href={`https://epic.gsfc.nasa.gov/archive/natural/${prevDateImage}/png/${card.image}.png`}
            >
              <CardMedia
                component="img"
                height="300"
                image={`https://epic.gsfc.nasa.gov/archive/natural/${prevDateImage}/png/${card.image}.png`}
                alt={`Earth ${card.date}`}
              />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.date}
              </Typography>
              <CardCoord variant="body2" color="text.secondary">
                <span>
                  <OptionCoord>Latitude</OptionCoord>{" "}
                  {card.centroid_coordinates.lat}
                </span>
                <span>
                  <OptionCoord>Longitude</OptionCoord>{" "}
                  {card.centroid_coordinates.lon}
                </span>
              </CardCoord>
            </CardContent>
          </CardActionArea>
        </CardEpic>
      ))}
    </Epic>
  );
};

export default EPIC;
