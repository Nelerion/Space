import * as React from "react";
import Tabs from "@mui/material/Tabs";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./../../img/logo.png";
import avatar from "./../../img/avatar.png";
import { ITabs } from "./modal";
import { useEffect, useState } from "react";

import {
  TabBox,
  TabNav,
  TextLogo,
  Logo,
  GitHub,
  Avatar,
  GitHubBlock,
  Header_Box,
  Header_logo,
  BurgerMenu,
  Burger_ul,
  Burger_li,
  Burger_border,
  BurgerNavBlock,
  NavBlockClose,
  NavLinkList,
  NavLinks,
} from "./style";

const Header: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<boolean>(true);
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
  useEffect(() => {
    location.pathname.includes("/techTransfer") && handleChange(4);
  }, [location.pathname]);

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
  const openBurgerMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const closeBurgerMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  return (
    <>
      <Header_Box>
        <BurgerNavBlock
          right={openMenu ? "-3000px" : "0"}
          width={openMenu ? "0" : "200px"}
          height={openMenu ? "0" : "auto"}
        >
          <NavBlockClose onClick={closeBurgerMenu}>
            <span>&#10006;</span>
          </NavBlockClose>
          {arr.map((tab, i) => (
            <NavLinkList>
              <NavLinks to={tab.link} key={tab.link}>
                {tab.label}
              </NavLinks>
            </NavLinkList>
          ))}
        </BurgerNavBlock>
        <Header_logo>
          <TextLogo>SPACE</TextLogo>
          <Logo src={logo} alt="logo" />
        </Header_logo>
        <BurgerMenu rotate={openMenu ? "rotate(0deg)" : "rotate(90deg)"}>
          <Burger_ul onClick={openBurgerMenu}>
            <Burger_li>
              <Burger_border></Burger_border>
            </Burger_li>
            <Burger_li>
              <Burger_border></Burger_border>
            </Burger_li>
            <Burger_li>
              <Burger_border></Burger_border>
            </Burger_li>
          </Burger_ul>
        </BurgerMenu>
        <GitHubBlock>
          <GitHub href="https://github.com/Nelerion" target="_blank">
            <span>GitHub</span>
            <Avatar src={avatar} alt="avatar" />
          </GitHub>
        </GitHubBlock>
      </Header_Box>
      <TabBox sx={{ width: "100%" }} style={{ paddingTop: '70px'}}>
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
    </>
  );
};

export default Header;
