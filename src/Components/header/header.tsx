import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";

const HeaderBox = styled(Box)`
    background-color:#f7f2f2;
`
const TabBox = styled(Box)`
    background-color:#f7f2f2;
`
const TabNav = styled(Tab)`
    &:hover{
        background-color: #e7e2e2;
    }
`
const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <HeaderBox sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{backgroundColor:'#45048f'}}>
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              Space
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </HeaderBox>
      <TabBox sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <TabNav label="APOD" />
          <TabNav label="Asteroids - NeoWs" />
          <TabNav label="DONKI" />
          <TabNav label="EPIC" />
          <TabNav label="Mars Rover Photos" />
          <TabNav label="Vesta/Moon/Mars Trek WMTS" />
        </Tabs>
      </TabBox>
    </div>
  );
};

export default Header;
