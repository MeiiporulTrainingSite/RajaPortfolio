import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import MediaCard from "./Card1";
import MediaCard1 from "./Card2";
import MediaCard2 from "./Card3";
import MediaCard3 from "./Card4";

export default function App() {
  return (
    <Paper
      sx={{
        padding: "1rem",
        borderRadius: "20px",
        // height: "68vh",
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
          margin: "25px 20px 0px 30px",
        }}
      >
        Portfolio
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "sans-serif",
          fontWeight: "bold",
          margin: "0 0px 10px 30px",
        }}
      >
        My works that I did for clients
      </Typography>
      <Grid
        container
        direction="row"
        // alignItems="center"
        columnGap={7}
        rowGap={3}
        mt={1}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            // alignItems: { xs: "center", md: "flex-start" },
            gap: "1rem",
          }}
        >
          <MediaCard />
          <MediaCard1 />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            //  alignItems: { xs: "center",md:"flex-start" },
            gap: "1rem"
          }}
        >
          <MediaCard2 />
          <MediaCard3 />
        </Grid>
      </Grid>
    </Paper>
  );
}
