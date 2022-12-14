import styled from "styled-components";
import { devices } from "../../../../mediaQueries/media";

export const ContentData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media ${devices.tablet} {
    margin-top:70px;
  }
`;

export const InfoData = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px;
`;

export const ImageData = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;

  padding: 40px;
  border-left: 1px solid #c9c7c5;
`;

export const ButtonPrevNext = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 40px;
  border: 0;
  background-color: #45048f;
  color: white;
  &:hover {
    background-color: #5a08b8;
    cursor: pointer;
  }
  &:disabled {
    background-color: #7749ac;
  }
  @media ${devices.mobileL} {
    width: 100%;
  }
`;

export const ButtonPrevNextBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  @media ${devices.mobileL} {
    flex-wrap: wrap;
    justify-content: center;
    gap:5px;
  }
`;

export const PaginationPages = styled.span`
  cursor: pointer;
  font-size: 20px;
  @media ${devices.tablet} {
    padding: 5px;
  }
  @media ${devices.mobileL} {
    display: none;
  }
`;
export const SearchAsteroidInputForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  gap: 10px;
  @media ${devices.mobileL} {
    flex-direction:column;
  }
`;

export const SearchAsteroidInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 35px;
  font-size: 18px;
  padding: 5px;
  outline: 0;
  box-sizing: border-box;
  border: 2px solid #5a08b8;
  @media ${devices.tablet} {
    font-size: 2vw;
  }
  @media ${devices.mobileL} {
    font-size: 18px;
  }
 
`;
export const ButtonSearch = styled(ButtonPrevNext)`
  height: 35px;
  border-radius: 5px;
  text-align: center;
  outline: 0;
  width: 100%;
`;
