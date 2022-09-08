import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Content from "./Components/content/content";

const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;


function App() {
  return (
    <>
      <CssBaseline  />
      <Container maxWidth="lg" >
        <BoxContainer sx={{ height: "100vh" }}>
          <Header />
          <Content />
          <Footer />
        </BoxContainer>
      </Container>
    </>
  );
}

export default App;
