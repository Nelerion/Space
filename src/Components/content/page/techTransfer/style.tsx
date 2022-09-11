import styled from "styled-components";

export const TechTransferPhotos = styled.div`
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
  height:300px;
  background-color: #fffbfb;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
  box-shadow: 0px 5px 13px -4px rgba(0, 0, 0, 0.14);
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
  display: flex;
  flex-direction: column;
  padding: 10px;

`;
export const CardTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #686868;
  font-size:16px;
`;
export const CardSubtext = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; // max nb lines to show
  -webkit-box-orient: vertical;
`;
export const More = styled.span`
color:#45048f;
text-decoration:none;
font-weight: bold;
&:hover{
  color:#713eac;
}
`