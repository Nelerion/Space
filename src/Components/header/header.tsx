import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./../../img/logo.png";
import { ITabs } from "./modal";
import { useEffect, useState } from "react";
import {
  HeaderBox,
  HeaderToolBar,
  TabBox,
  TabNav,
  TextLogo,
  Logo,
} from "./style";

const Header: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    switch (location.pathname) {
      case "/APOD":
        handleChange(0);
        break;
      case "/Asteroids":
        handleChange(1);
        break;
      case "/EPIC":
        handleChange(2);
        break;
      case "/Mars":
        handleChange(3);
        break;
    }
  }, [location.pathname]);
  useEffect(()=>{
    location.pathname.includes('/techTransfer')&& handleChange(4);
  },[location.pathname])

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
      link: "/EPIC",
      label: "EPIC",
    },
    {
      link: "/Mars",
      label: "Mars",
    },
    {
      link: "/techTransfer",
      label: "TechTransfer",
    },
  ]);

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
