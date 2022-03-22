import React from "react";
import { items } from "../data";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { Paper, Box, Grid } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { CssBaseline, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Test from "./testprops";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1
  },
  dot: {
    backgroundColor: "default"
  },
  dotActive: {
    backgroundColor: "rgb(255, 69, 27)"
  }
});

export default function Testimonial() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.round(items.length / 2);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Paper
      sx={{
        padding: "1rem",
        borderRadius: "20px",
        width: { xs: "340px", sm: "auto" },
        marginTop: 4,
      
      }}
      elevation={9}
    >
      <Typography
        variant="h6"
        sx={{
          color: "rgb(255, 69, 27)",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          margin: { xs: "5px", md: "25px 20px 0px 30px" }
        }}
      >
        Testimonials
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          margin: { xs: "5px", md: "0 0px 10px 30px" },
          fontSize: { xs: "1.3rem", sm: "1.8rem" }
        }}
      >
        What people say about me
      </Typography>
      <CssBaseline />
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            // alignItems: { xs: "center" },
            gap: "0.8rem"
          }}
        >
          <Test
            description={items[0].description}
            image={items[0].image}
            name={items[0].name}
            title={items[0].title}
          />
          <Test
            description={items[1].description}
            image={items[1].image}
            name={items[1].name}
            title={items[1].title}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "0.8rem"
          }}
        >
          <Test
            description={items[2].description}
            image={items[2].image}
            name={items[2].name}
            title={items[2].title}
          />
          <Test
            description={items[3].description}
            image={items[3].image}
            name={items[3].name}
            title={items[3].title}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "0.5rem"
          }}
        >
          <Test
            description={items[4].description}
            image={items[4].image}
            name={items[4].name}
            title={items[4].title}
          />
          <Test
            description={items[5].description}
            image={items[5].image}
            name={items[5].name}
            title={items[5].title}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            gap: "0.8rem"
          }}
        >
          <Test
            description={items[6].description}
            image={items[6].image}
            name={items[6].name}
            title={items[6].title}
          />
          <Test
            description={items[7].description}
            image={items[7].image}
            name={items[7].name}
            title={items[7].title}
          />
        </Box>
      </SwipeableViews>
      <Grid item xs={12}>
        <MobileStepper
          variant="dots"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          classes={{
            root: classes.root,
            dot: classes.dot,
            dotActive: classes.dotActive
          }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              sx={{ color: "rgb(255, 69, 27)" }}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: "rgb(255, 69, 27)" }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Grid>
    </Paper>
  );
}
