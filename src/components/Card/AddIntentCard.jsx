import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';


const card = (
    <React.Fragment>
        <CardContent style={{ height: '150px',  display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <CardActions style={{backgroundColor:'grey', borderRadius:'40px'}}>
                <AddIcon  style={{color:'white'}}/>
            </CardActions>
            <Typography sx={{ fontSize: 16, fontWeight: 'bold', mt: 2, alignItems: 'center' }} color="text.secondary" gutterBottom>
                Not Sure What you are 
            </Typography>
            <Typography sx={{ fontSize:16, fontWeight:'bold', alignItems:'center'}} color="text.secondary">
            looking for
            </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#1b2338' }}>
            <Button size="small">Create Collection</Button>
        </CardActions>
    </React.Fragment>
);

export default function IntentCards() {
    return (
        <div style={{width: "229px"}}>
            <Box sx={{ minWidth: 275}}>
            <Card variant="outlined">{card}</Card>
        </Box>
        </div>
        
    );
}