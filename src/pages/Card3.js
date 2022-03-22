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

export default function MediaCard2() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 220,height: { lg: "53vh" },borderRadius:"15px" }}>
      <span>
        <CardMedia
          component="img"
          height="100"
          image="https://www.trainingzone.co.uk/sites/default/files/styles/inline_banner/public/skynesher_1.jpg?itok=ketYILQv"
          alt=" Training  "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Training
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Everyone wants to reach a production process that is repeatable and
            improved quality. One can do this identifying the variables within
            the system and understanding their interactions in printing.
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
                <p> Advanced and tailor-made training </p>
                <p>
                  {" "}
                  Dedicated to the advanced users who need to detail technical
                  information about entire flexography, gravure, offset
                  processes. The training activity can be customised and
                  include.
                </p>
                <p>
                  - Detail description of every component in the printing group
                  and their variables
                </p>
                <p>
                  - Color Management: color reproduction, complete step by step
                  description of the color first time right. Finger print
                  optimization and digital color matching.
                </p>
                <p>- Deep dive for ink room management </p>
                <p>- Troubleshooting guidance</p>
                <p>
                  - Benchmark with competitors or peer group performance level
                </p>
                <p>- 5S </p>
                <p>- Lean Management </p>
                <p>- Root cause analysis</p>
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
