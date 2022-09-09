import styled from "styled-components";

export const ContentData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const InfoData = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: start;
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

export const Title = styled.h1`
  font-size: 2rem;
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
  width: 100%;
  height: 70%;
  pointer-events: none;
`;
