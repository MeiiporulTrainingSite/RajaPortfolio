import Contactinfo from "./contactinfo";
import Contactform from "./contactform";
import { Stack, Paper, Typography } from "@mui/material";

export default function Contact(props) {
  return (
    <Paper
      sx={{
        padding: { xs: "1rem", md: "3rem 3.5rem 3.5rem 3.5rem" },
        borderRadius: "20px",
        marginTop: 5,
        marginBottom: 4
      }}
      elevation={9}
    >
      <Typography
        variant="h6"
        sx={{
          color: "rgb(255, 69, 27)",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          margin: "25px 20px 5px 0"
        }}
      >
        Contact Me
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "sans-serif",
          marginBottom: "1.5rem",
          fontWeight: "bold"
        }}
      >
        Get Ahold Of Me
      </Typography>
      <Stack direction={{ md: "row", xs: "column" }}>
        <Contactinfo />
        <Contactform>{props.children}</Contactform>
      </Stack>
    </Paper>
  );
}
