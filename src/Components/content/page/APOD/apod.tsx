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
  isLoading,
  isLoadingFalse,
} from "../../../../store/slices/nasaSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useEffect, useState } from "react";
import { fetchAPOD } from "../../../header/fetch";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import YouTube, { YouTubeProps } from "react-youtube";
import styled from "styled-components";

const APOD_page = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.space.APOD);
  const isLoad = useAppSelector((state) => state.space.loading);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    dispatch(isLoading());
    fetchAPOD().then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((result) => {
        setError(false);
        dispatch(fetchingAPOD(result));
      });
    });
  }, []);

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };


  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "540",
    playerVars: {
      autoplay: 1,
    },
  };

const Container = styled.div`
  width:100%;
`

  return (
    <Container>
      {isLoad && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      )}
      {error ? (
        <Error />
      ) : (
        <ContentData>
          <InfoData>
            <Title>{data?.title}</Title>
            <Date>{data?.date}</Date>
            <Explanation>{data?.explanation}</Explanation>
            <Copyright>{data?.copyright}</Copyright>
          </InfoData>
          <ImageData>
            {data?.url.includes("youtube") ? (
              <YouTube
                videoId={data?.url.split("embed/")[1]}
                opts={opts}
                onReady={onPlayerReady}
              />
            ) : (
              <a href={`${data?.url}`}>
                {!data?.url?null:<Image src={data?.url} alt={`${data?.title}`} />}
              </a>
            )}
          </ImageData>
        </ContentData>
      )}
    </Container>
  );
};

export default APOD_page;
