import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

const card = (
  <React.Fragment>
    <CardContent
      sx={{
        height: "150px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      <CardActions style={{ backgroundColor: "grey", borderRadius: "40px" }}>
        <AddIcon style={{ color: "white" }} />
      </CardActions>
      <Typography
        sx={{ fontSize: 16, mt: 2, alignItems: "center" }}
        color="#ecf2ff"
        gutterBottom
        textAlign={'center'}
      >
        Not Sure What you are<br/> looking for
      </Typography>
      
    </CardContent>
    <CardActions
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button size="small">Create Collection</Button>
    </CardActions>
  </React.Fragment>
);

export default function IntentCards() {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          border: "2px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {card}
      </Card>
    </Box>
  );
}
