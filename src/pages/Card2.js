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
} from "@mui/material";

export default function MediaCard1() {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
  };

  const handleToClose = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 350,borderRadius:"15px" }}>
      <span>
        <CardMedia
          component="img"
          height="140"
          style={{ height: 100 }}
          image="https://cpb-us-w2.wpmucdn.com/web.sas.upenn.edu/dist/a/122/files/2016/06/sustainability-18185nl.jpg"
          alt=" Circular Economy "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Circular Economy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A circular economy creates economic development independent of
            finite resources. For the packaging industry this leads to the
            following main levers
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
          <Dialog open={open} onClose={handleToClose} PaperProps={{ sx: {borderRadius:"15px",width:{xs:"90%",md:"auto"} } }}>
            <DialogTitle>{"Circular Economy "}</DialogTitle>
            <DialogContent>
              <DialogContentText 
               color="text.primary">
                <p>
                  Reduce means that the amount of resources, and in particular
                  finite resources, entering the cycle is being reduced by
                  waving unnecessary packaging parts like eg. overpacks solely
                  for marketing purpose, or substituting oil-based plastic
                  through renewable resources, such as paper{" "}
                </p>
                <p>
                  Reuse means that all packaging entering the cycle is being
                  used multiple times before disposal in order to utilize the
                  resources to the fullest maximum of all used resources
                </p>

                <p>
                  Recycling means that packaging waste is converted into reuse
                  material through respective sorting and recycling technologies
                  (medical and chemical). In a circular economy , recycling is
                  the only acceptable scenario for disposal, even though the
                  need for any disposal should be prevented in the first place.{" "}
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
