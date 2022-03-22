//import { Switch, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import { Element } from "react-scroll";
import Resume from "./resume";
import Box from "@mui/material/Box";
import Testimonial from "./testimonial";
import Contact from "./contact";
import Portfolio from "./portfolio";
export default function Pages() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "-2.5rem",
      }}
    >
        <Element id="home">
        <Home /> 
      </Element> 
      <Element id="about">
        <About />
      </Element>
      <Element id="resume">
        <Resume />
      </Element>
      <Element id="portfolio">
        <Portfolio />
      </Element>
      <Element id="testimonial">
        <Testimonial />
      </Element>
      <Element id="contact">
        <Contact />
      </Element>
    </Box>
  );
}
