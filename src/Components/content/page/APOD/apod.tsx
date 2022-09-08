import { ContentData, InfoData, ImageData } from "./style";
import { IAPOD } from "../../../../store/slices/nasaSlice";
import styled from "styled-components";

interface PROPS {
  data?: IAPOD;
}

const Title = styled.h1`
  font-size: 2rem;
`;
const Explanation = styled.span``;
const Date = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  font-weight: bold;
`;
const Copyright = styled(Date)`
  justify-content: flex-start;
  font-size: 14px;
  color: #b1afb3;
  margin-top: 10px;
`;
const Image = styled.img`
  width: 100%;
  height:70%;
`;
const APOD_page = ({ data }: PROPS) => {


  return (
    <ContentData>
      <InfoData>
        <Title>{data?.title}</Title>
        <Date>{data?.date}</Date>
        <Explanation>{data?.explanation}</Explanation>
        <Copyright>{data?.copyright}</Copyright>
      </InfoData>
      <ImageData>
        <Image src={data?.url} alt="nasa" />
      </ImageData>
    </ContentData>
  );
};

export default APOD_page;
