import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tab from "@mui/material/Tab";

export const HeaderBox = styled(Box)`
  background-color: #f7f2f2;
`;
export const HeaderToolBar = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TabBox = styled(Box)`
  background-color: #f7f2f2;
`;
export const TabNav = styled(Tab)`
  &:hover {
    background-color: #e7e2e2;
  }
`;
export const TextLogo = styled.span`
  color: #ffffff;
  letter-spacing: 5px;
  font-weight: bold;
`;
export const Logo = styled.img`
  width: 50px;
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
`;

