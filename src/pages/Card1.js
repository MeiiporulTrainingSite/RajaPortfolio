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

export default function MediaCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth:180,borderRadius:"15px" }}>
      <span>
        <CardMedia
          component="img"
          height="140"
          style={{ height: 100 }}
          image=" https://www.3csoftware.com/wp-content/uploads/2020/01/iStock-1072111648.jpg"
          alt=" Digital transformation "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Digital transformation
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The world is changing and it’s changing fast. Business need to adapt
            to new digital realities, invest in strategic innovation to drive
            resilience and sustainable growth.
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
            <DialogTitle>{"Digital transformation"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                The drive for great efficiency and effectiveness has
                organisation transforming through the smart use of technology to
                better manage what they do and how they do it. I support see
                opportunities in fast moving markets, aligning people, processes
                and technology to transform organisation and support to face the
                future with confidence.
                <p>Project example </p>
                <p> - Setup centralised colormatching system </p>
                <p> - Digital color request </p>
                <p>
                  {" "}
                  - Setup remote support ( remote glass + connecting with
                  expert){" "}
                </p>
                <p> - Digital consultancy </p>
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
