import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";
import FunctionsIcon from "@mui/icons-material/Functions";
import AttachMoneyTwoToneIcon from "@mui/icons-material/AttachMoneyTwoTone";
import HourglassBottomTwoTone from "@mui/icons-material/HourglassBottomTwoTone";

const card = (appName, description, AppIcon, Apps, handleNavigate) => {
  return (
    <div className="AppCard">
      <React.Fragment>
        <CardContent
          style={{
            height: "150px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <AppIcon style={{ alignItems: "center", color: "#fff" }} />
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold", mt: 2 }}
            color="#fff"
            gutterBottom
          >
            {appName}
          </Typography>
          <Typography
            sx={{ fontSize: 16, fontWeight: "bold", mb: 1.5 }}
            color="#fff"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {Apps === "Comming Soon" ? (
            <Button size="small">NA</Button>
          ) : (
            <Button onClick={() => handleNavigate(appName)}>{Apps}App</Button>
          )}
        </CardActions>
      </React.Fragment>
    </div>
  );
};

export default function AppCard({
  appName,
  description,
  AppIcon,
  Apps,
  handleNavigate = () => {},
}) {
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
        {card(appName, description, AppIcon, Apps, handleNavigate)}
      </Card>
    </Box>
  );
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';
// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );

// const card = (
//     <React.Fragment>
//         <CardContent style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

//             {/* <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography> */}
//             {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography> */}
//         </CardContent>
//         <CardActions style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1b2338' }}>
//             <Button size="small">Create Collection</Button>
//         </CardActions>
//     </React.Fragment>
// );

// export default function IntentCards() {
//     return (
//         <Box sx={{ minWidth: 100 }}>
//             <Card variant="outlined">{card}</Card>
//         </Box>
//     );
// }
