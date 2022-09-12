import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import APOD_page from "./page/APOD/apod";
import { useAppDispatch, useAppSelector } from "./../../store/hooks";
import Asteroids_page from "./page/asteroids/asteroids";
import EPIC from "./page/EPIC/epic";
import Mars from "./page/MarsRoverPhotos/mars";
import TechTransfer from "./page/techTransfer/techTransfer";
import FullInfo from "./page/techTransfer/fullInfo/fullInfo";
import { fetchTechTransfer } from "../header/fetch";
import { useState } from "react";
import { fetchingTechTransfer, isLoading, isLoadingFalse } from "../../store/slices/nasaSlice";
const ContentBox = styled.div`
  width: 100%;
  min-height:500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dad9ff61;

`;

const Content: React.FC = () => {
const dispatch = useAppDispatch();
const [error,setError]=useState<boolean>(false);
  const fetchTech = () => {
    dispatch(isLoading());
    fetchTechTransfer().then((res) => {
      if (res.status >= 400) {
        dispatch(isLoadingFalse());
        setError(true);
        return;
      }
      return res.json().then((data) => {
        setError(false);
        const arr: any = [];
        data.results.map((result: any) => {
          arr.push({
            nameId: result[1],
            name: result[2],
            description: result[3],
            optionalText: result[5],
            image: result[10],
            id: result[0],
          });
        });
        dispatch(fetchingTechTransfer(arr));
      });
    });
  };

  return (
    <ContentBox>
      <Routes>
        {/* <Route path="/" element={<APOD right="start info" />} /> */}
        <Route path="/" element={<APOD_page />} />
        <Route path="/APOD" element={<APOD_page />} />
        <Route path="/Asteroids" element={<Asteroids_page />} />
        <Route path="/EPIC" element={<EPIC />} />
        <Route path="/Mars" element={<Mars />} />
        <Route path="/techTransfer" element={<TechTransfer fetchTech={fetchTech}error={error}  />}/>
        <Route path="/techTransfer/:title" element={<FullInfo fetchTech={fetchTech} error={error} />}/>

      </Routes>
    </ContentBox>
  );
};

export default Content;
function dispatch(arg0: any) {
  throw new Error("Function not implemented.");
}

