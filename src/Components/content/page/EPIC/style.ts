import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { devices } from "../../../../mediaQueries/media";

export const Epic = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 0 5px;
  @media ${devices.tablet} {
    margin-top:75px;
  }
`;
export const CardEpic = styled(Card)`
  min-width: 25%;
  @media (max-width: 1064px) {
    min-width: 40%;
  }
  @media (max-width: 724px) {
    width: 80%;
  }
`;
export const CardCoord = styled(Typography)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const OptionCoord = styled.span`
  font-weight: bold;
`;

export const ImageCard = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
    z-index: 2;
    transition: 300ms;
    border-radius: 10px;
  }
  @media (max-width: 724px) {
    height: 20%
  }
`;
export const FormSearchEarth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media ${devices.laptop} {
    padding: 0 10px;
  }
  @media ${devices.tablet} {
    flex-direction:column;
    gap: 20px;
  }
`;
export const SearchEarth = styled.input`
  width: 30%;
  height: 50px;
  border: 2px solid #5a08b8;
  outline: 0;
  font-size: 22px;
  padding: 5px;
  @media ${devices.laptop} {
    font-size: 2vw;
    width: 100%;
  }
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
export const ButtonSearchEarth = styled.input`
  width: 30%;
  height: 50px;
  background-color: #45048f;
  outline: 0;
  color: white;
  border: 0;
  font-size: 25px;
  &:hover {
    background-color: #5a08b8;
    cursor: pointer;
  }
  &:disabled {
    background-color: #7749ac;
  }
  @media ${devices.laptop} {
    width: 100%;
  }
`;
