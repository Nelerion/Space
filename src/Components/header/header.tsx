import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import { NavLink, useHref, useLocation } from "react-router-dom";
import logo from "./../../img/logo.png";
import { ITabs } from "./modal";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  HeaderBox,
  HeaderToolBar,
  TabBox,
  TabNav,
  TextLogo,
  Logo,
} from "./style";
import { fetchAPOD, fetchAsteroids } from "./fetch";
import {
  fetchingAPOD,
  fetchingAsteroids,
  isLoading,
} from "./../../store/slices/nasaSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Header = () => {
  const [value, setValue] = useState<number>(0);
  const [logos, setLogo] = useState<string>("");
  const location = useLocation();
  const dispatch = useAppDispatch();
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const [arr, setArr] = useState<ITabs[]>([
    {
      link: "/APOD",
      label: "APOD",
    },
    {
      link: "/Asteroids",
      label: "Asteroids - NeoWs",
    },
    {
      link: "/DONKI",
      label: "DONKI",
    },
    {
      link: "/EPIC",
      label: "EPIC",
    },
    {
      link: "/Mars",
      label: "Mars",
    },
    {
      link: "/WMTS",
      label: "Vesta/Moon/Mars Trek WMTS",
    },
  ]);

  const isDate = new Date();
  const todayMonth: number = Number(isDate.getMonth());
  const todayYear: number = Number(isDate.getFullYear());
  const day: number = Number(new Date().getDate());
  const nowDate = format(new Date(todayYear, todayMonth, day), "yyyy-MM-dd");
  const prevDate = format(
    new Date(todayYear, todayMonth, day - 7),
    "yyyy-MM-dd"
  );

  useEffect(() => {
    if (location.pathname === "/APOD") {
      dispatch(isLoading());
      fetchAPOD().then((result) => dispatch(fetchingAPOD(result)));
    }
    if (location.pathname === "/Asteroids") {
      fetchAsteroids(nowDate, prevDate).then((result) => {
        const count = result.element_count;
        const earth_objects = result.near_earth_objects;
        const links = result.links;
        console.log(`result`)
        dispatch(
          fetchingAsteroids({
            count,
            earth_objects,
            links,
          })
        );
      });
    }
  }, [location]);

  return (
    <div>
      <HeaderBox sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#45048f" }}>
          <Toolbar>
            <HeaderToolBar variant="h3" sx={{ flexGrow: 1 }}>
              <TextLogo>Space</TextLogo>
              <Logo src={logo} alt="logo" />
            </HeaderToolBar>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </HeaderBox>
      <TabBox sx={{ width: "100%" }}>
        <Tabs value={value} centered>
          {arr.map((tab, i) => (
            <NavLink to={tab.link} key={tab.link}>
              <TabNav
                label={tab.label}
                key={tab.label}
                onClick={() => handleChange(i)}
              />
            </NavLink>
          ))}
        </Tabs>
      </TabBox>
    </div>
  );
};

export default Header;
