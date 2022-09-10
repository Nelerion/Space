import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchingMars,
  fetchingMarsLoadingMore,
  IMars,
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import { fetchMarsPhoto, fetchMarsPhotoLoadingMore } from "../../../header/fetch";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Error from "./../../../error";

const MarsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
  transition: ease 0.5s;
`;

const MarsPhotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
  padding: 10px 0;
`;

const Card = styled.div`
  width: 30%;
  min-width: 250px;
  height: auto;
  background-color: #fffbfb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
`;

const CardHeader = styled.div`
  width: 100%;
  height: 150px;
  -webkit-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
  transition:300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
    z-index: 2;
    transition: 300ms;
    border-radius: 10px;
  }
`;
const InfoLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #686868;
`;
const CardSubtext = styled.span``;
const OptionalName = styled.span`
  font-weight: bold;
`;
const LoadMore = styled.input`
  width: 250px;
  height: 40px;
  display: flex;
 justify-content: center;
 align-items: center;
  background: rgba(0, 0, 0, 0);
  border:1px solid gray;
  cursor: pointer;
  font-size: 30px;
  border-radius: 5px;
  outline: 0;
  transition:300ms;
  &:hover{
    background-color:#1083ee;
    border:0;
    color:white;
    transition: 200ms;
  }
`;
const Mars = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.space.Mars.photos);
  const isLoad = useAppSelector((state) => state.space.loading);
  const [counterMore,setCounterMore] = useState<number>(2)
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
  console.log(data);

  const loadingMore = ()=>{
    dispatch(isLoading());
    setCounterMore(prev=>prev+1)
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
  }
 
    

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
      <LoadMore value="Load More" type="button" onClick={loadingMore}/>
    </MarsContainer>
  );
};

export default Mars;
