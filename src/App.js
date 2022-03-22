import "./styles.css";
import NavBar from "./component/Navbar";
import Pages from "./pages/page";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./component/Footer";
export default function App() {
  return (
    <Box
      sx={{
        background: "rgb(255, 246, 241)"
      }}
    >
      {/* <Socialmedia /> */}
      <CssBaseline />
      <Grid
        container
        className="grid"
        sx={{
          padding: {
            xs: "13vh 1rem 0 1rem",
            lg: "6rem 6rem 0 6rem",
            xl: "6rem 7rem 0 7rem"
          }
        }}
        columnSpacing={{ md: -1, lg: -1, xl: 1 }}
      >
        <Grid item sm={12} md={3}>
          <NavBar />
        </Grid>
        <Grid item sm={12} md={9}>
          <Pages />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}
