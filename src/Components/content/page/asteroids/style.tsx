import styled from "styled-components";

export const ContentData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
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
  border-left:1px solid #c9c7c5;
`;

export const ButtonPrevNext = styled.input`
display:flex;
justify-content: center;
align-items: center;
width:40%;
height:40px;
border:0;
background-color:#45048f;
color:white;
&:hover{
  background-color:#5a08b8;
  cursor: pointer;
}
`

export const ButtonPrevNextBlock = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width:100%;
margin-top: 5px;;
`

export const Pages = styled.span`
cursor: pointer;
font-size: 20px;
`
