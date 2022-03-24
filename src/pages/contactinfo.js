import { Grid, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { personaldetails } from "../data";

export default function Contactinfo() {
  return (
    <Grid
      container
      xs={12}
      md={12}
      xl={6}
   
      gap={{ xs: 3 }}
    >
      <Grid container spacing={{xs:3,md:1,sm:-30,lg:6}}>
        <Grid item xs={3} >
          <Avatar sx={{ bgcolor: "rgb(255,179,36)", width: 70, height: 70 }}>
            <PhoneIphoneIcon />
          </Avatar>
        </Grid>
        <Grid item md={6} xs={6}>
          <Typography
         
            variant="h6"
            sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          >
            Call Me
          </Typography>
          {personaldetails[3].value}
        </Grid>
      </Grid>
      <Grid container spacing={{xs:3,md:1,sm:-30,lg:6}} sx={{ marginTop: { md: "-70px" } }}>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: "rgb(255,179,36)", width: 70, height: 70 }}>
            <EmailOutlinedIcon />
          </Avatar>
        </Grid>
        <Grid item md={6} xs={6}>
          <Typography
            component="h4"
            variant="h6"
            sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          >
            Email Us
          </Typography>
          {personaldetails[2].value}
        </Grid>
      </Grid>
      <Grid container spacing={{xs:3,md:1,sm:-30,lg:6}} sx={{ marginTop: { md: "-70px" } }}>
        <Grid item xs={3}>
          <Avatar sx={{ bgcolor: "rgb(255,179,36)", width: 70, height: 70 }}>
            <LocationOnIcon />
          </Avatar>
        </Grid>
        <Grid item md={6} xs={6}>
          <Typography
            component="h4"
            variant="h6"
            sx={{ fontFamily: "sans-serif", fontWeight: "bold" }}
          >
            Address
          </Typography>
          {personaldetails[4].value}
        </Grid>
      </Grid>
    </Grid>
  );
}
