import { Grid, Card, CardContent, Typography, Badge } from '@mui/material';
import DateLocation from './DateLocation';
// import './Ubicacion.css';

const Ubicacion = (props) => {

    const [ country, location ] = props.location.timezone.split('/');

    return (
        <div className='container'>
            
            {/* <div style={{position: 'absolute', height: '0'}}>
                <div className='buttons'>
                    <a className='close' href='#' > X </a>
                </div>
            </div> 
            
            <div id='home' className='icon'>
                <span></span>
            </div>*/}
            

            <Grid container spacing={2}>
                <Grid item xs="auto">

                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Badge badgeContent={ props.location.abbreviation} color="primary">
                                    { location + ' ' } 
                                </Badge>
                                
                            </Typography>
                            {/* <small>{ props.location.abbreviation }</small> */}
                            <Typography variant="body2" color="text.secondary">
                                { country }
                            </Typography>                            
                        </CardContent>

                    </Card>

                  
                </Grid>
                <Grid item xs="auto">
               
                    <DateLocation date={ props.location.datetime }></DateLocation>
                  
                </Grid>  
            </Grid>
 

            {/* <div className='hourline'>

            </div> */}

        </div>
    );
}


export default Ubicacion;