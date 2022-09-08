import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import APOD_page from "./page/APOD/apod";
import { useAppSelector } from "./../../store/hooks";
import Asteroids_page from "./page/asteroids/asteroids";
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dad9ff61;
`;

const Content = () => {
  const APOD = useAppSelector((state) => state.space.APOD);
  const Asteroids = useAppSelector((state) => state.space.Asteroids);
  return (
    <ContentBox>
      <Routes>
        {/* <Route path="/" element={<APOD right="start info" />} /> */}
        <Route path="/APOD" element={<APOD_page data={APOD} />} />
        <Route path="/Asteroids" element={<Asteroids_page data={Asteroids} />} />
        {/* <Route path="/DONKI" element={<APOD right="DONKI INFO" />} />
        <Route path="/EPIC" element={<APOD right="EPIC INFO" />} />
        <Route path="/Mars" element={<APOD right="MARS INFO" />} />
        <Route path="/WMTS" element={<APOD right="WMTS INFO" />} /> */}
      </Routes>
    </ContentBox>
  );
};

export default Content;
