import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import PropTypes from "prop-types";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={100}
        thickness={2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "red" : "#308fe8",
          animationDuration: "5s",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={100}
        thickness={2}
        {...props}
      />
      <Box
        sx={{
           top: -5,
          // // left: { xs: -30, sm: -80, l: -30 },
            // left: { xs: -20, sm: -80, md: -40,xl: -40 },
            left:{xs:-20,lg:-80 ,sm:-60,md:-20},
           bottom: 0,
           right: 0,
           position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="red"
          fontSize="1rem"
          FontWeight="bolder"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CustomizedProgressBars(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CircularProgressWithLabel value={props.value} />
    </Box>
  );
}
//  export default function CircularStatic(props) {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 0 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={props.value} />;
// }
