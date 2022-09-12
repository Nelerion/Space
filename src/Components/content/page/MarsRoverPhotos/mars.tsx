import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchingMars,
  fetchingMarsLoadingMore,
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import {
  fetchMarsPhoto,
  fetchMarsPhotoLoadingMore,
} from "../../../header/fetch";
import {
  MarsContainer,
  MarsPhotos,
  Card,
  CardHeader,
  CardImage,
  InfoLabel,
  CardTitle,
  CardSubtext,
  OptionalName,
  LoadMore,
} from './style';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Error from "./../../../error";
import { IMars } from "./interfaces";


const Mars = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.space.Mars.photos);
  const isLoad = useAppSelector((state) => state.space.loading);
  const [counterMore, setCounterMore] = useState<number>(2);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    dispatch(isLoading());
    fetchMarsPhoto("1").then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((data) => {
        setError(false);
        const arr: any = [];
        data.photos.map((mars: any) => arr.push(mars));
        dispatch(fetchingMars(arr));
      });
    });
  }, []);

  const loadingMore = () => {
    dispatch(isLoading());
    setCounterMore((prev) => prev + 1);
    fetchMarsPhotoLoadingMore(counterMore).then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((data) => {
        setError(false);
        const arr: any = [];
        data.photos.map((mars: any) => arr.push(mars));
        dispatch(fetchingMarsLoadingMore(arr));
      });
    });
  };


  return (
    <MarsContainer>
      <MarsPhotos>
        {isLoad && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        {error ? (
          <Error />
        ) : (
          data?.map((mars: IMars) => (
            <Card>
              <CardHeader>
                <a href={`${mars.img_src}`}>
                  <CardImage src={`${mars.img_src}`} alt="" />
                </a>
              </CardHeader>
              <InfoLabel>
                <CardTitle>{mars.earth_date}</CardTitle>
                <CardSubtext>
                  <OptionalName>Camera: </OptionalName>
                  {mars.camera.name}
                </CardSubtext>
                <CardSubtext>
                  <OptionalName>Rover: </OptionalName>
                  {mars.rover.name}
                </CardSubtext>
                <CardSubtext>
                  <OptionalName>Status: </OptionalName>
                  {mars.rover.status}
                </CardSubtext>
                <CardSubtext>
                  <OptionalName>Landing date: </OptionalName>
                  {mars.rover.landing_date}
                </CardSubtext>
                <CardSubtext>
                  <OptionalName>Launch date: </OptionalName>
                  {mars.rover.launch_date}
                </CardSubtext>
              </InfoLabel>
            </Card>
          ))
        )}
      </MarsPhotos>
      <LoadMore
        value="Load More"
        type="button"
        onClick={loadingMore}
      />
    </MarsContainer>
  );
};

export default Mars;
