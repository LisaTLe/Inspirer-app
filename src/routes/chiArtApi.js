import * as React from 'react';
import "../App.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const search = async (query) => {

    const apiUrl = `https://api.artic.edu/api/v1/artworks/search?q=${query}`;
    const res = await fetch(apiUrl);
    if(!res.ok) {
        throw new Error(`error loading results (${res.status})`)
    }

    return res.json();

};


// return (
    
//     <div>
//         <TextField id="standard-basic" label="Search" variant="standard" />
    

//         export default function MediaCard() {
//           return (
//             <Card sx={{ maxWidth: 345 }}>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="/static/images/cards/contemplative-reptile.jpg"
//                 alt="green iguana"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   Lizard
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Lizards are a widespread group of squamate reptiles, with over 6,000
//                   species, ranging across all continents except Antarctica
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small">Learn More</Button>
//               </CardActions>
//             </Card>
//           );
//         }

//     </div>

// )