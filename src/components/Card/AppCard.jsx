import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './styles.css';
import FunctionsIcon from '@mui/icons-material/Functions';
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import HourglassBottomTwoTone from '@mui/icons-material/HourglassBottomTwoTone';



const card = (appName, description, AppIcon, Apps , handleNavigate) => {
    return (
        <div className='AppCard'>
            <React.Fragment>
                <CardContent style={{ height: '150px', display: 'flex', justifyContent: 'center', gap: '12px', alignItems: 'center', flexDirection: 'column' }}>
                    <AppIcon style={{ alignItems: 'center' }} />
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold', mt: 2 }} color="text.secondary" gutterBottom>
                        {appName}
                    </Typography>
                    <Typography sx={{ fontSize: 16, fontWeight: 'bold', mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1b2338' }}>
                    {Apps === "Comming Soon" ? <Button size='small'>NA</Button> : <Button onClick={() => handleNavigate(appName)}>{Apps}App</Button>}
                </CardActions>
            </React.Fragment>
        </div>


    )
}



export default function AppCard({ 
    appName, 
    description, 
    AppIcon, 
    Apps,
    handleNavigate = () => {}
}) {
    return (
        <div style={{ width: "229px" }}>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card(appName, description, AppIcon, Apps ,  handleNavigate)}</Card>
            </Box>

        </div>

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