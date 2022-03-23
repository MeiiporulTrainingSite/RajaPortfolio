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
        margin: { xs: "0 0 0 20px" },borderRadius:"15px"
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" color="text.primary" align="justify" sx={{textIndent:"40px",wordSpacing:{xs:"-4px",lg:'0'},fontSize:{xs:'10px',lg:'18px'}}}>
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
        <Typography variant="h6" component="h6">
          {props.name}
          <Typography
            variant="body2"
            sx={{ textAlign: { xs: "left", md: "center" } }}
          >
            {props.title}
          </Typography>
        </Typography>
      </Stack>
    </Card>
  );
}
