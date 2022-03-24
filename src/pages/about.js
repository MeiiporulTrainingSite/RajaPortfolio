
import Box from "@mui/material/Box";

import {
  Paper,
  Grid,
  Avatar,
  Typography,
  Button,
  List,
  ListItemText,
  ListItem,
  Divider,
  MenuItem,
  MenuList,
  Stack,
  CssBaseline,
} from "@mui/material";
import photo from "../images/photo.jpg";
import { personaldetails } from "../data";

export default function About() {
  const personal = (
    <List sx={{ color: "#fff" }}>
      {personaldetails.map((list, i) => (
        <Box key={i}>
          <ListItem
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              mt: "-10px",
            }}
          >
            <ListItemText primary={list.title} />
            <ListItemText primary={list.value} />
            <ListItemText primary={list.value1} />
          </ListItem>
        </Box>
      ))}
    </List>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Paper
        sx={{
          padding: "3rem 2rem",
          borderRadius: "20px",
          marginTop: 5,
        }}
        elevation={9}
      >
        <Grid container xs={12} md={12} xl={12}>
          <Stack
            direction={{ md: "row", xs: "column-reverse" }}
            spacing={{ md: 2, lg: 20, xl: -30 }}
          >
            <Grid container>
              <Grid item sx={{ display: { xs: "none", md: "block" } }}>
                <Avatar
                  sx={{
                    width: 250,
                    height: 250,
                    borderRadius: "20px",
                    position: "absolute",
                  }}
                  variant="square"
                  src={photo}
                  alt="Raja"
                />
              </Grid>
              <Grid item >
                <MenuList
                  sx={{
                    height: { xs: "none", md: "400px" },
                    width: { xs: "75vw",sm:"350px",md:"250px" },
                    position: { xs: "none", lg: "relative" },
                    top: { xs: "none", md: "50px" },
                    left: { xs: "none", md: "130px" },
                    marginLeft:{sm:"175px",md:"0"}
                  }}
                >
                  <Paper
                    sx={{
                      borderRadius: "20px",
                      background: "rgb(255, 69, 27)",
                    }}
                    elevation={9}
                  >
                    <MenuItem>{personal}</MenuItem>
                  </Paper>
                </MenuList>
              </Grid>
            </Grid>
            <Grid container xs={12} md={12} xl={12}>
              <Grid item>
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgb(255, 69, 27)",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "25px 20px 0px 0",
                  }}
                >
                  About Me
                </Typography>

                <Typography
                  paragraph
                  align="left"
                  sx={{ fontSize: { xs: "15px", md: "20px" } }}
                >
                  A committed professional with several years spanning across
                  all aspects of business organization management, giving
                  exposure to various business strategies. I have successfully
                  supported organizations maximize their revenue by cost
                  minimization and productivity optimization. Adapt at
                  incorporating technological advancements in day to day
                  processes.
                </Typography>
                <a href="https://drive.google.com/uc?export=download&id=1HsqxNd9l91QEPFq2fO1y-9GKi2_UfByJ" download="test file">
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    fontSize: "16px",
                    textTransform: "uppercase",
                    fontWeight: 600,

                    backgroundColor: "#ff451b",
                    ":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    },
                    padding: { xs: "10px 25px", md: "14px 50px" },
                    borderRadius: "10px",
                    whiteSpace: "nowrap",
                    transition: "all .3s ease",
                  }}
                >
                  Download CV
                </Button>
                </a>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
}
