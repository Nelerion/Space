import styled from "styled-components";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import { devices } from "./../../mediaQueries/media";
import { NavLink } from "react-router-dom";

export const TabBox = styled(Box)`
  background-color: #f7f2f2;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const TabNav = styled(Tab)`
  &:hover {
    background-color: #e7e2e2;
  }
`;

export const TextLogo = styled.h1`
  color: #ffffff;
  letter-spacing: 5px;
  font-weight: bold;
  font-size: 36px;
  display: block;
  margin: 0;
  padding: 0;
  @media ${devices.mobileL} {
    font-size: 20px;
    font-weight: normal;
  }
  @media ${devices.mobileM} {
    font-size: 18px;
    font-weight: normal;
  }
`;
export const Logo = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  animation: spin 20s linear 0s infinite;
  pointer-events: none;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @media ${devices.tablet} {
    width: 0;
    display: none;
    overflow: hidden;
  }
`;

export const GitHub = styled.a`
  height: 100%;
  display: inline-flex;
  align-items: center;
  color: white;
  letter-spacing: 2px;
  font-size: 20px;
  gap: 10px;
  &:hover {
    color: #51ff00;
  }

  @media ${devices.mobileM} {
    font-size: 18px;
    gap: 0;
  }
`;

export const Avatar = styled.img`
  display: inline-block;
  border-radius: 100%;
  width: 50px;
  margin: 0;
  padding: 0;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const GitHubBlock = styled(Button)`
  height: 100%;
  display: inline-flex;
  align-items: center;
`;

export const Header_Box = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #45048f;
  padding: 0 20px;
  position: fixed;
  left: 0;
  right: 0;
z-index:100;
`;
export const Header_logo = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 20px;
`;

export const BurgerMenu = styled.div<{ rotate: string }>`
  display: none;
  @media ${devices.tablet} {
    display: block;
    transform: ${(props) => props.rotate};
    transition: 350ms;
  }
`;

export const Burger_ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  margin: 0;
  padding: 0;
`;

export const Burger_li = styled.li`
  width: 50px;
  height: 5px;
  background-color: white;
`;
export const Burger_border = styled.span``;

export const BurgerNavBlock = styled.div<{right: string;width: string;height: string}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #f4f4ff;
  position: fixed;
  z-index: 100;
  top: 0;
  right: ${(props) => props.right};
  -webkit-box-shadow: 0px 5px 49px 24px rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0px 5px 49px 24px rgba(0, 0, 0, 0.19);
  box-shadow: 0px 5px 49px 24px rgba(0, 0, 0, 0.19);
  transition: width 350ms, height 350ms, right 350ms;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0 20px;
`;
export const NavBlockClose = styled.div`
  display: flex;
  font-size: 25px;
  background-color: #edeeee;
  width: 30px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin: 5px 0 5px 5px;
  cursor: pointer;
  border: 1px solid #797979;
  &:hover {
    background-color: #fefeff;
    
  }
`;

export const NavLinkList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 400ms;
  border-top: 1px solid black;
  :last-child{
    border-radius: 0 0 0 20px;
  }
  &:hover {
    background-color: #f9feff;
    font-weight: bold;
    
  }
`;
export const NavLinks = styled(NavLink)`
  color: black;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  &:hover {
    margin-left: 15px;
    transition: margin 300ms;
    &:before {
      content: "➨";
      margin-right: 5px;
      color: #45048f;
    }
  }
`;
