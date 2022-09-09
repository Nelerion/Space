import {
  ContentData,
  InfoData,
  ImageData,
  Title,
  Explanation,
  Date,
  Copyright,
  Image,
} from "./style";
import { fetchingAPOD, IAPOD, isLoading } from "../../../../store/slices/nasaSlice";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect } from "react";
import { fetchAPOD } from "../../../header/fetch";



const APOD_page = () => {
const dispatch= useAppDispatch();
  const data = useAppSelector((state) => state.space.APOD);
  const isLoad = useAppSelector((state) => state.space.loading);

  useEffect(() => {
      dispatch(isLoading());
      fetchAPOD().then((result) => dispatch(fetchingAPOD(result)));
  }, []);
  return (
    <ContentData>
      {isLoad ? (
        <CircularProgress />
      ) : (
        <>
          <InfoData>
            <Title>{data?.title}</Title>
            <Date>{data?.date}</Date>
            <Explanation>{data?.explanation}</Explanation>
            <Copyright>{data?.copyright}</Copyright>
          </InfoData>
          <ImageData>
            <Image src={data?.url} alt="nasa" />
          </ImageData>
        </>
      )}
    </ContentData>
  );
};

export default APOD_page;
