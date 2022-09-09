import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import APOD_page from "./page/APOD/apod";
import { useAppSelector } from "./../../store/hooks";
import Asteroids_page from "./page/asteroids/asteroids";
import EPIC from "./page/EPIC/epic";
const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dad9ff61;
`;

const Content: React.FC = () => {
  return (
    <ContentBox>
      <Routes>
        {/* <Route path="/" element={<APOD right="start info" />} /> */}
        <Route path="/APOD" element={<APOD_page />} />
        <Route path="/Asteroids" element={<Asteroids_page />} />
        <Route path="/EPIC" element={<EPIC />} />
        {/* <Route path="/EPIC" element={<APOD right="EPIC INFO" />} />
        <Route path="/Mars" element={<APOD right="MARS INFO" />} />
        <Route path="/WMTS" element={<APOD right="WMTS INFO" />} /> */}
      </Routes>
    </ContentBox>
  );
};

export default Content;
