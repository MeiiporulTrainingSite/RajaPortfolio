import { useState } from "react";
import profilephoto from "../images/profilephoto.jpg";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { menu } from "../data";
import { Link } from "react-scroll";
import * as React from "react";
import { Collapse, Grid, Paper, Avatar } from "@mui/material";
import { MenuList, MenuItem } from "@mui/material";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { CardActions } from "@mui/material";
import logo from "../images/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";
import "../styles.css";
const drawerWidth = 240;

export default function NavBar(props) {
  const [stylec, setStylesc] = useState(false);
  // const useStyles = makeStyles({
  //   root: {
  //    backgroundColor: stylec?"red":"yellow",

  //   },
  // });
  // const classes=useStyles();
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // function colourChange(){
  //   setStylesc(true);
  // }

  const drawer = (
    // <Paper
    //   sx={{ height: "70vh", width: "12vw", borderRadius: "20px" }}
    //   elevation={9}
    // >
    <List>
      <Toolbar
        sx={{
          bgcolor: "#FEB224",
          marginTop: "-15px",

          borderRadius: { xs: "0", md: "20px 20px 0 0" },
          height: "15vh"
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
            borderRadius: "13px"
          }}
        />
      </Toolbar>
      <Divider />
      <Box sx={{ marginTop: "59px" }}>
        {menu.map((list, i) => (
          <Box key={i} className="link">
            <Link
              to={list.path}
              activeClass="active"
              // activeClassName="link"
              // activeStyle={{color:"red"}}
              smooth={true}
              duration={500}
            >
              <ListItem
                button
                // onClick={colourChange}
                sx={{
                  ":hover": {
                    transition: "all .3s ease",
                    color: "#ff451b"
                  },
                  diplay: "flex",
                  gap: "15px",
                  paddingLeft: "20%",

                  fontSize: "15px",
                  textTransform: "uppercase"
                }}
              >
                <Typography style={{ color: "#ff451b" }}>
                  {list.icon}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Poppins"
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
    // {/* </Paper> */}
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

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
            justifyContent: "center"
          }}
        >
          {/* position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      > */}
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <img className = 'image'src={logo} style={{ zIndex: 2 }} alt="logo" />

            <CardActions sx={{ display: { xs: "none", md: "flex" } }}>
              <a href="https://www.facebook.com" target="_blank" >
              <Avatar  sx={{ bgcolor: "#3B5998", width: 50, height: 50,":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    }, }}>
                <FacebookIcon sx={{ width: 10, height: 10 }} />
              </Avatar>
              </a>
              <a href="https://www.linkedin.com/in/rajagurulingam-ramalingam-9756b6157/" target="_blank" >
              <Avatar sx={{ bgcolor: "#007AB9", width: 50, height: 50 ,":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    },}}>
              
                <LinkedInIcon sx={{ width: 10, height: 10 }} />
              </Avatar>
              </a>
              <a href="https://www.twitter.com" target="_blank" >
              <Avatar sx={{ bgcolor: "#26A6D1", width: 50, height: 50,":hover": {
                      backgroundColor: "orange",
                      color: "white",
                    }, }}>
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
              borderRadius: "20px"
            }}
            elevation={9}
          >
            {drawer}
          </Paper>
        </MenuList>
        {/* <Drawer
          variant="permanent"
          // anchor="right"
          PaperProps={{ elevation: 9 }}
          sx={{
            display: { xs: "none", sm: "block" },
            width: "200",
            position: "relative",
            flexShrink: "0",

            // [`& .MuiBackdrop-root`]: {
            //   display: "none",
            //   // position: "absolute"
            // },
            [`& .MuiDrawer-paper`]: {
              position: "absolute",
              height: "70vh",
              borderRadius: 5,
              width: drawerWidth,
              boxSizing: "border-box"
            }
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "hidden" }}>{drawer}</Box>
        </Drawer> */}
        {/* <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      > */}
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            },
            zIndex: (theme) => theme.zIndex.drawer + 1
          }}
        >
          <Box sx={{ overflow: "hidden" }}>{drawer}</Box>
        </Drawer>
      </Box>
    </>
  );
}
