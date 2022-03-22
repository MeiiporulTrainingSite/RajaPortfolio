import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Box,
  Card,
  Button,
  Stack,
  ListItemIcon,
  ListItemText,
  ListItem,
  TextField,
} from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import LinearProgressWithLabel from "./linear";
import CircularProgressWithLabel from "./circular";
import CircularProgressWithLabel1 from "./circular2";
import { textAlign } from "@mui/system";
export default function Resume() {
  return (
    <Paper
      sx={{
        padding: "1rem",
        borderRadius: "20px",
        marginTop: 4,
        fontFamily: "poppins",
      }}
      elevation={9}
    >
      <Typography
        variant="h6"
        sx={{
          color: "rgb(255, 69, 27)",
          fontFamily: "sans-serif",
          fontWeight: "bold",
          // margin: "25px 20px 0px 0"
        }}
      >
        Resume
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Combination of Skill & Experience
      </Typography>

      <Grid container xs={12} md={12} l={6}>
        <Stack
           marginLeft={{ xs: "0", md: "2" }}
          direction={{ xs: "column", md: "row" }}
          spacing={6}
        >
          <Grid
            item
            sx={{
              width: { xs: "auto", md: "50%" },
              height: { xs: "auto", md: "auto" },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedOutlinedIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Education
                  </Typography>
                }
              />
            </ListItem>
            <Stack display="column" spacing={-2}>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={2}
                      >
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          G7 Expert Certificate{" "}
                          <Typography
                            // type="body2"
                            style={{
                              color: "black",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Idealliance, USA
                          </Typography>
                        </Typography>
                        {/* <Box
                          justifyContent="flex-end"
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: { xs: "5vh", md: "5vh" },
                            width: { xs: "50vw", md: "10vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins"
                          }}
                        >
                          Year 2021
                        </Box> */}
                      </Stack>
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={1}
                      >
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          Lean Six Sigma Black Belt{" "}
                          <Typography
                            // type="body2"
                            style={{
                              color: "black",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Neville-Clarke, Singapore
                          </Typography>
                        </Typography>
                        {/* <Box
                          justifyContent="flex-end"
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: "5vh",
                            width: { xs: "50vw", md: "12vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins"
                          }}
                        >
                          Year 2015
                        </Box> */}
                      </Stack>
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={1}
                      >
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          MBA{" "}
                          <Typography
                            // type="body2"
                            style={{
                              color: "black",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Anamalai University, India
                          </Typography>
                        </Typography>
                        {/* <Box
                          justify="flex-end"
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: "5vh",
                            width: { xs: "50vw", md: "11vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins"
                          }}
                        >
                          Year 2014
                        </Box> */}
                      </Stack>
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightOutlinedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={1}
                      >
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          Bachelor of Chemistry{" "}
                          <Typography
                            // type="body2"
                            style={{
                              color: "black",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Manonmaniam Sundaranar University, India
                          </Typography>
                        </Typography>
                        {/* <Box
                          justify="flex-end"
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: "5vh",
                            width: { xs: "50vw", md: "18vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins"
                          }}
                        >
                          Year 2001
                        </Box> */}
                      </Stack>
                    </>
                  }
                />
              </ListItem>
            </Stack>
          </Grid>
          <Grid
            item
            sx={{
               mL: "3",
              // width: "30vw",
              height: { xs: "auto", md: "auto" },
            }}
          >
            <ListItem>
              <ListItemIcon>
                <RadioButtonCheckedOutlinedIcon sx={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography
                    type="body2"
                    style={{
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      fontFamily: "poppins",
                    }}
                  >
                    Personal Skills{" "}
                  </Typography>
                }
              />
            </ListItem>
            <Grid item marginLeft={9} rowGap={3} paddingRight={1}>
              <Box sx={{ width: "80%", mr: 1, padding: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Management Skills
                </Typography>
              </Box>
              <LinearProgressWithLabel value={90} />
              <Box sx={{ width: "80%", mr: 1, padding: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Adaptability
                </Typography>
              </Box>
              <LinearProgressWithLabel value={90} />
              <Box sx={{ width: "80%", mr: 1, padding: 1 }}>
                <Typography
                  sx={{
                    fontWeight: "bolder",
                    fontFamily: "poppins",
                    fontSize: "1.1rem",
                  }}
                >
                  Critical Thinking
                </Typography>
              </Box>
              <LinearProgressWithLabel value={85} />
            </Grid>
          </Grid>
        </Stack>
      </Grid>

      <Grid container xs={12} md={12} marginLeft={{xs:0,md:1}}>
        {/* <Stack
          marginLeft={2}
          direction={{ xs: "column", md: "row" }}
          spacing={1}
        > */}
        <Grid
          item
          sx={{
            width: { xs: "auto", md: "50%" },
            height: { xs: "auto", md: "auto" },
          }}
        >
          <ListItem spacing={2}>
            <ListItemIcon>
              <RadioButtonCheckedOutlinedIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  type="body2"
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
                  Experience{" "}
                </Typography>
              }
            />
          </ListItem>

          <Stack
            marginLeft={{xs:0,md:1}}
            direction={{ xs: "column", md: "row", l: "row" }}
            spacing={1}
          >
            <Grid item>
              <ListItem>
                {/* <ListItemIcon>
              <ArrowRightOutlinedIcon />
            </ListItemIcon> */}
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack direction={{ xs: "column", md: "row", l: "row" }}>
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          Head of Process Management & Consulting Services, SEA
                          <Typography
                            // type="body2"
                            style={{
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Siegwerk Singapore Pte Ltd
                          </Typography>
                        </Typography>
                        <Box
                          justify="flex-end"
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: "5vh",
                            width: { xs: "50vw", md: "20vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins",
                          }}
                        >
                          2006- present
                        </Box>
                      </Stack>
                      <Typography
                        sx={{
                          marginTop: "2vh",
                          fontFamily: "poppins",
                          textAlign: "justify",
                        }}
                      >
                        Leading the Regional Process Management Unit, enhancing
                        our ability to server our customer, fast paced and
                        exciting customers via the implementation of new and
                        innovation business improvement strategies and culture.
                      </Typography>
                    </>
                  }
                />
              </ListItem>

              <ListItem>
                {/* <ListItemIcon>
              <ArrowRightOutlinedIcon />
            </ListItemIcon> */}
                <ListItemText
                  disableTypography
                  primary={
                    <>
                      <Stack
                        direction={{ xs: "column", md: "row", lg: "row" }}
                        spacing={{ xs: 0, md: 5, lg: 10 }}
                      >
                        <Typography
                          // type="body2"
                          style={{
                            color: "black",
                            fontWeight: "bolder",
                            fontSize: "1.1rem",
                            fontFamily: "poppins",
                          }}
                        >
                          Technical Supervisor
                          <Typography
                            // type="body2"
                            style={{
                              color: "grey",
                              fontWeight: "bold",
                              fontSize: "1rem",
                              fontFamily: "poppins",
                            }}
                          >
                            Sicpa India Pte Ltd
                          </Typography>
                        </Typography>
                        <Typography
                          sx={{
                            color: "red",
                            borderRadius: 15,
                            textAlign: "center",
                            justifyContent: "right",
                            height: "5vh",
                            width: { xs: "50vw", md: "10vw" },
                            border: "solid lightgrey 0.5px",
                            paddingTop: "0.5vh",
                            fontFamily: "poppins",
                          }}
                        >
                          2002- 2005
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          marginTop: "2vh",
                          fontFamily: "poppins",
                          textAlign: "justify",
                        }}
                      >
                        Enthusiastic and diligent technical professional with
                        excellent customer satisfaction records. Adept at
                        maintaining cordial and professional relationships with
                        colleagues and customers. Ability to develop business
                        with key clients as well as managing accounts with high
                        levels of complexity.
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </Grid>
          </Stack>
        </Grid>
        <Grid
          item
          sx={{
            width: { xs: "auto", md: "50%" },
            height: { xs: "auto", md: "auto" },
          }}
        >
          <ListItem spacing={2}>
            <ListItemIcon>
              <RadioButtonCheckedOutlinedIcon sx={{ color: "red" }} />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography
                  type="body2"
                  style={{
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    fontFamily: "poppins",
                  }}
                >
                  Software Skills
                </Typography>
              }
            />
          </ListItem>
          <Grid item marginLeft={{xs:0,md:1}} marginTop={1}>
            <Stack
              direction="row"
              spacing={0}
              sx={{ padding: "10px 10px 0 30px" }}
            >
              <Grid item xs={6} md={6} xl={6} sx={{ mr: 1 }}>
                <Box marginLeft={{xs:0,md:1}} sx={{ textAlign: "left" }}>
                  <CircularProgressWithLabel value={85} />
                  <Typography
                    sx={{
                      // padding: "10px 0 0 30px",
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontFamily: "poppins",
                      marginTop: "2vh",
                    }}
                  >
                    MS Office
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={6} xl={6} sx={{ width: "50%", mr: 1 }}>
                <Box marginLeft={{xs:0,md:1}}>
                  <CircularProgressWithLabel value={75} />
                  <Typography
                    sx={{
                      // padding: "10px 0 0 30px",
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "1.1rem",
                      fontFamily: "poppins",
                      marginTop: "2vh",
                    }}
                  >
                    Salesforce
                  </Typography>
                </Box >
              </Grid>
            </Stack>
          </Grid>
          <Grid item marginLeft={{xs:0,md:1}} marginTop={4}>
            <Stack
              direction="row"
              spacing={3}
              sx={{ ml: 0, padding: "10px 20px 0 30px" }}
            >
              <Grid item xs={6} md={6} xl={6} sx={{ width: "50%", mr: 1 }}>
                {/* <Typography>MS Office</Typography> */}
                <Box marginLeft={{xs:0,md:1}} sx={{ textAlign: "left" }}>
                  <CircularProgressWithLabel1 textAlign="center" value={70} />
                  <Typography
                    sx={{
                      // padding: "10px 0 0 30px",
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "1.1rem",
                      textAlign: "left",
                      fontFamily: "poppins",
                      marginTop: "2vh",
                      marginLeft: { xs: "-4vw", md: "-1vw" },
                    }}
                  >
                    Enterprise Applications
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={6} xl={6} sx={{ width: "50%", mr: 1 }}>
                <Box marginLeft={{xs:0,md:1}}>
                  <CircularProgressWithLabel1 value={80} />
                  <Typography
                    sx={{
                      //padding: "0 20px 0 30px",
                      fontWeight: "bolder",
                      color: "black",
                      fontSize: "1.1rem",
                      fontFamily: "poppins",
                      marginTop: "2vh",
                      whiteSpace: "nowrap",
                      // marginLeft: { xs: "-vw" }
                    }}
                  >
                    Color
                    <br />
                    Management
                  </Typography>
                </Box>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
