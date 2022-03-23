import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@mui/material";

import {
  Dialog,
  DialogContentText,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";

export default function MediaCard3() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
   <Card sx={{ maxWidth: 150, height: { lg: "57vh" },borderRadius:"15px" }}>
      <span>
        <CardMedia
          component="img"
           height="100"
          image="https://classifieds.usatoday.com/wp-content/uploads/2017/11/marketing-consultant--768x512.jpeg"
          alt=" Consultant "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Consultant
          </Typography>
          <Typography variant="body2" color="text.secondary">
            In addition to training, it is possible to manage different needs
            like, as example,
          </Typography>
        </CardContent>
        <CardActions>
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
              padding: { xs: "5px 15px", md: "7px 25px" },
              borderRadius: "10px",
              whiteSpace: "nowrap",
              transition: "all .3s ease"
            }}
            onClick={handleClickToOpen}
          >
            Learn More
          </Button>
          <Dialog open={open} onClose={handleToClose}>
            <DialogTitle>{"Training"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <p>- Technical support </p>
                <p>- Partial technical advice </p>
                <p>- Printing press performance validation</p>
                <p>- Printed products analysis</p>
                <p>- Quality evaluation</p>
                <p>- Product selection</p>
                <p>
                  - Printers selection according to specific quality
                  requirements
                </p>
                <p>- Ink room setup & Choose right equipment </p>
                <p>- Ink room best practices implementation </p>
                <p>- Press room improvement projects</p>
                <p>
                  Colormatching time reduction, Downtime reduction , Setup time
                  reduction, Setup material reduction, Press speed increase,
                  Liquid waste reduction,
                </p>
                <p>
                  - Benchmark customer performance to competitor or peer group
                </p>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleToClose} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </CardActions>
      </span>
    </Card>
  );
}
