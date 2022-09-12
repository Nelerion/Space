import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";
import Content from "./Components/content/content";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Header />
        <Content />
        <Footer />
      </Container>
    </>
  );
}

export default App;
