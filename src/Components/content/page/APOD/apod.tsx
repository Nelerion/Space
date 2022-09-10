import Error from "./../../../error";
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
import {
  fetchingAPOD,
  IAPOD,
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import { fetchAPOD } from "../../../header/fetch";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const APOD_page = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.space.APOD);
  const isLoad = useAppSelector((state) => state.space.loading);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    dispatch(isLoading());
    fetchAPOD().then((res) => {
      if (res.status>=400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((result) => {
        setError(false);
        dispatch(fetchingAPOD(result));
      });
    });
  }, [error]);

  return (
    <ContentData>
      {isLoad && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error?<Error/>:
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
      }
    </ContentData>
  );
};

export default APOD_page;
