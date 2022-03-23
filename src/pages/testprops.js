import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Test(props) {
  return (
    <Card
      sx={{
        width: {
          xs: "260px",
          sm: "380px",
          md: "500px",
          lg: "530px",
          xl: "680px"
       },
        margin: { xs: "0 0 0 20px" },
        borderRadius:"15px",
        padding:{xs:'5px'}
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" color="text.primary" align="justify" sx={{textIndent:"40px",wordSpacing:{xs:"-1px",lg:'-4px'},fontSize:{xs:'12px',sm:'15.5px',lg:'18px'}}}>
          {props.description}
        </Typography>
      </CardContent>
      <Stack direction="row">
        <Avatar
          alt={props.name}
          src={props.image}
          sx={{
            width: 50,
            height: 50,
            margin: "0 20px 10px"
          }}
        />
        <Typography variant={{md:"h6"}} component="h6" sx={{fontSize:{xs:'14px',md:'18px'},padding:{xs:'0 0 5px 0'}}}>
          {props.name}
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "left", md: "center" }, fontSize:{xs:'12px',md:'14px'}}}
          >
            {props.title}
          </Typography>
        </Typography>
      </Stack>
    </Card>
  );
}
