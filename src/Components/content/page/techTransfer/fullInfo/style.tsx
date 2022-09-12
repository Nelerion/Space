import styled from "styled-components";
import { devices } from "../../../../../mediaQueries/media";

export const Container = styled.div`
  margin-top: 5px;
  width: 100%;
  
`;
export const FullInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  padding: 20px;
  @media  ${devices.laptop} {
    flex-direction: column;
    align-items: center;
  }
  @media ${devices.tablet} {
    margin-top:70px;
  }
`;

export const InfoCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media  ${devices.laptop} {
    width: 100%;
    text-align: justify;
  }
`;
export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;
export const Description = styled.span`
  border-bottom: 1px solid #aaaca9;
  padding: 15px;
`;
export const OptionalTextBlock = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;
`;
export const OptionalText = styled.span`
  color: #45048f;
  font-weight: bold;
  display: flex;
`;
export const ImageCard = styled.div`
  width: 49%;
  @media  ${devices.laptop} {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  border-radius: 25px;
`;
export const BackButton = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0);
  border: 1px solid gray;
  cursor: pointer;
  font-size: 30px;
  border-radius: 5px;
  outline: 0;
  transition: 300ms;
  margin-bottom: 10px;
  margin-left: 10px;
  &:hover {
    background-color: #1083ee;
    border: 0;
    color: white;
    transition: 200ms;
  }
`;