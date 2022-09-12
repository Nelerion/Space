import styled from "styled-components";
import { devices } from "../../../../mediaQueries/media";

export const ContentData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media ${devices.laptop} {
    flex-direction: column;
    margin-top:70px;
  }
`;

export const InfoData = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 40px;
  @media ${devices.laptop} {
    width: 100%;
    flex-direction: column;
    text-align: justify;
  }
  @media ${devices.tablet} {
    padding: 20px;
    text-align: justify;
  }
`;

export const ImageData = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 40px;
  border-left: 1px solid #c9c7c5;
  opacity: 0.9;
  transition:300ms;
  &:hover{
    opacity: 1;
    transition:300ms;
  }
  @media ${devices.laptop} {
    width: 100%;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
  @media ${devices.mobileL} {
    text-align:center;
  }
`;

export const Explanation = styled.span``;

export const Date = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
  font-weight: bold;
`;
export const Copyright = styled(Date)`
  justify-content: flex-start;
  font-size: 14px;
  color: #b1afb3;
  margin-top: 10px;
`;
export const Image = styled.img`
  max-width: 100%;
    height: auto;
  pointer-events: none;
  border-radius: 20px;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: white;
`;
