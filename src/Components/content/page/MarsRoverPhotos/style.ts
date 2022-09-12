import styled from "styled-components";
import { devices } from "../../../../mediaQueries/media";

export const MarsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;
  transition: ease 0.5s;
  @media ${devices.tablet} {
    margin-top:70px;
  }
`;

export const MarsPhotos = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 30px;
  margin-top: 5px;
  padding: 10px 0;
`;

export const Card = styled.div`
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
  @media (max-width: 614px) {
    width: 80%;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 150px;
  -webkit-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 5px 6px -6px rgba(0, 0, 0, 0.38);
`;
export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.8;
  z-index: -1;
  transition: 300ms;
  &:hover {
    opacity: 1;
    cursor: pointer;
    transform: scale(1.05);
    z-index: 2;
    transition: 300ms;
    border-radius: 10px;
  }
`;
export const InfoLabel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #686868;
`;
export const CardSubtext = styled.span``;
export const OptionalName = styled.span`
  font-weight: bold;
`;
export const LoadMore = styled.input`
  width: 250px;
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
  &:hover {
    background-color: #1083ee;
    border: 0;
    color: white;
    transition: 200ms;
  }
`;

