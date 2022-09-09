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
import { IAPOD } from "../../../../store/slices/nasaSlice";
import styled from "styled-components";
import { useAppSelector } from "../../../../store/hooks";
import CircularProgress from "@mui/material/CircularProgress";

interface PROPS {
  data?: IAPOD;
}

const APOD_page = ({ data }: PROPS) => {
  const isLoad = useAppSelector((state) => state.space.loading);

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
