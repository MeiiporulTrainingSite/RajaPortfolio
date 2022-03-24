import * as React from "react";

import profilephoto from "../images/profilephoto.jpg";
import { menu } from "../data";
import logo from "../images/logo.png";
import "../styles.css";

import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  Toolbar,
  Grid,
  Paper,
  Avatar,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  MenuList,
  CardActions,
} from "@mui/material";

import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const drawerWidth = 240;

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <Toolbar
        sx={{
          bgcolor: "#FEB224",
          marginTop: "-15px",

          borderRadius: { xs: "0", md: "20px 20px 0 0" },
          height: "15vh",
        }}
      >
        <img
          src={profilephoto}
          alt="raja"
          style={{
            width: "120px",
            height: "130px",
            position: "relative",
            top: "35px",
            left: "23%",
            border: "5px solid white",
            borderRadius: "13px",
          }}
        />
      </Toolbar>
      <Divider />
      <Box sx={{ marginTop: "50px" }}>
        {menu.map((list, i) => (
          <Box key={i} className="link">
            <Link
              to={list.path}
              activeClass="active"
              smooth={true}
              duration={500}
            >
              <ListItem
                button
                sx={{
                  ":hover": {
                    transition: "all .3s ease",
                    color: "#ff451b",
                  },
                  diplay: "flex",
                  gap: "15px",
                  paddingLeft: "20%",

                  fontSize: "15px",
                  textTransform: "uppercase",
                }}
              >
                <Typography style={{ color: "#ff451b" }}>
                  {list.icon}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Poppins",
                  }}
                >
                  {list.title}
                </Typography>
              </ListItem>
            </Link>
            <Divider />
          </Box>
        ))}
      </Box>
    </List>
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            background: "rgb(255, 246, 241)",
            width: "100%",
            height: "13vh",
            padding: { xs: "none", sm: "0 1rem", lg: "0 7rem 0 7rem" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img
              className="image"
              src={logo}
              style={{ zIndex: 2 }}
              alt="logo"
            />

            <CardActions sx={{ display: { xs: "none", md: "flex" } }}>
              <a href="https://www.facebook.com" target="_blank">
                <Avatar
                  sx={{
                    bgcolor: "#3B5998",
                    width: 50,
                    height: 50,
                    ":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    },
                  }}
                >
                  <FacebookIcon sx={{ width: 10, height: 10 }} />
                </Avatar>
              </a>
              <a
                href="https://www.linkedin.com/in/rajagurulingam-ramalingam-9756b6157/"
                target="_blank"
              >
                <Avatar
                  sx={{
                    bgcolor: "#007AB9",
                    width: 50,
                    height: 50,
                    ":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ width: 10, height: 10 }} />
                </Avatar>
              </a>
              <a href="https://www.twitter.com" target="_blank">
                <Avatar
                  sx={{
                    bgcolor: "#26A6D1",
                    width: 50,
                    height: 50,
                    ":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    },
                  }}
                >
                  <TwitterIcon sx={{ width: 10, height: 10 }} />
                </Avatar>
              </a>
            </CardActions>
            <Grid
              container
              justifyContent="flex-end"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { md: "none" } }}
                >
                  <MenuIcon sx={{ color: "black" }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <MenuList
          sx={{ display: { xs: "none", md: "block" }, position: "fixed" }}
        >
          <Paper
            sx={{
              display: { xs: "none", md: "block" },
              height: "67.5vh",
              width: "19vw",
              borderRadius: "20px",
            }}
            elevation={9}
          >
            {drawer}
          </Paper>
        </MenuList>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Box sx={{ overflow: "hidden" }}>{drawer}</Box>
        </Drawer>
      </Box>
    </>
  );
}
