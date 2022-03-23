import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";



export default function Home() {
  
  return (
    
    <Paper
            className="paper"
      sx={{
        height: { xs: "auto", md: "68.5vh" },
        padding: "3rem 1rem 1rem 1rem",
        borderRadius: "20px",
        display: "flex",
        marginTop: 5,

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      elevation={9}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          marginBottom: "10px",
          color: "#ff451b",
          fontSize: { xs: "21px", sm: "23px", lg: "35px" }
        }}
      >
        Welcome!
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          color: "#fff",
          fontSize: { xs: "38px", sm: "45px", lg: "70px" },
          marginBottom: { xs: "10px", sm: "13px", lg: "20px" }

        }}
      >
        I'm Raja<span className="span">gurulingam</span>
      </Typography>
      <Typography
        paragraph
        align="center"
        sx={{
          color: "#dadada",
          fontSize: { xs: "16px", md: "18px", lg: "22px" },
          maxWidth: "750px",
          margin: { xs: "0 auto 25px", lg: "0 auto 40px" }
        }}
      >
        Globally experienced,  proactive business leader  with technical skills
        and organizational management in upcoming industry.
        
      </Typography>
      <a href="https://drive.google.com/uc?export=download&id=1hcqpa81FC0V7sp8mIjXy1EgoZYCF-gnq" download="myfile" target="blank">
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
            padding: { xs: "10px 25px", md: "14px 50px" },
            borderRadius: "10px",
            whiteSpace: "nowrap",
            transition: "all .3s ease"
          }}
        >
          Download CV
        </Button>
      </a>
     
    </Paper>
  );
}
