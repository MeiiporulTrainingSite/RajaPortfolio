import Box from "@mui/material/Box";
// import CV from "../../public/CV.pdf";
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
  CssBaseline
 
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
             
            }}
          >
            <ListItemText primary={list.title} />
            <ListItemText primary={list.value} />
            <ListItemText primary={list.value1} />
          </ListItem>
          {/* <Divider /> */}
        </Box>
      ))}
    </List>
  );
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Paper
        sx={{
          padding:{xs:"1rem",sm:"4rem"},
          borderRadius: "20px",
          marginTop: 5
        }}
        elevation={9}
      >
        <Grid container xs={12} md={12} xl={12}>
          <Stack
            direction={{ md:"row",xs: "column-reverse" }}
            spacing={{sm:-30, md: 2, lg: -25, xl: -30 }}
          >
            <Grid container sx={{height:"65vh"}}>
              <Grid item sx={{ display: { xs: "none", lg: "block" } }}>
                <Avatar
                  sx={{
                    width: 250,
                    height: 250,
                    borderRadius: "20px",
                    position: "absolute",
                    margin:"0px 10px",
                                       
                  }}
                  variant="square"
                  src={photo}
                  alt="Raja"
                />
              </Grid>
              <Grid item>
                <MenuList
                  sx={{
                    // height: { xs: "none", md: "350px" },
                    width: { xs: "82vw", md: "230px" },
                    position: { xs: "none", lg: "relative" },
                    top: { xs: "none", lg: "100px" },
                    left: { xs: "none", lg: "130px" }
                  }}
                >
                  <Paper
                    sx={{
                      borderRadius: "20px",
                      background: "rgb(255, 69, 27)"
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
                <Box >
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgb(255, 69, 27)",
                    fontFamily: "sans-serif",
                    fontWeight: "bold",
                    margin: "0px 20px 0px 0px"
                  }}
                >
                  About Me
                </Typography>
           
                <Typography
                  paragraph
                  align="justify"
                  sx={{ fontSize: { xs: "15px", md: "20px" }}}
                >
                 A committed professional with several years spanning across all aspects of 
                 business organization management, giving exposure to various business strategies. 
                 I have successfully supported organizations maximize their revenue by cost minimization 
                 and productivity optimization. Adapt at incorporating technological advancements 
                 in day to day processes.
                  </Typography>
                  
                
                {/* <a href={CV} download="test file"> */}
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
                        color: "white"
                      },
                      padding: { xs: "10px 25px", md: "14px 50px" },
                      borderRadius: "10px",
                      whiteSpace: "nowrap",
                      transition: "all .3s ease"
                    }}
                  >
                    Download CV
                  </Button>
                  </Box>
                {/* </a> */}
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Paper>
    </Box>
  );
}
