import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchingMars,
  IMars,
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import { fetchMarsPhoto } from "../../../header/fetch";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";

const MarsPhotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
`;

const Mars = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.space.Mars.photos);
  const isLoad = useAppSelector((state) => state.space.loading);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    dispatch(isLoading());
    fetchMarsPhoto("1").then((res) => {
      if (!res.ok) {
        dispatch(isLoadingFalse());
        setError(true);
        throw Error(`is not ok: ` + res.status);
      }
      return res.json().then((data) => {
        const arr: any = [];
        data.photos.map((mars: any) => arr.push(mars));
        dispatch(fetchingMars(arr));
      });
    });
  }, []);

  return (
    <MarsPhotos>
      {isLoad ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        data?.map((mars: IMars) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={`${mars.img_src}`}
                alt={`${mars.earth_date}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {mars.earth_date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      )}
      {error && (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Ошибка!</Alert>
        </Stack>
      )}
    </MarsPhotos>
  );
};

export default Mars;
