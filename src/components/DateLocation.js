import { Grid, Card, CardContent, Typography, Badge } from '@mui/material';

const DateLocation = (props) => {
    
    var arrayOfWeekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    const formatAMPM = (date) => {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes.toString().padStart(2, '0');
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }

    // const hourDateLocation = new Date(props.date).getHours();
    // const minuteDateLocation = new Date(props.date).getMinutes();
    const dayNameDateLocation = new Date(props.date).getDay()
    const monthNameDateLocation = new Date(props.date).toLocaleString('en-US', { month: 'short' });
    const monthDayDateLocation = new Date(props.date).getDay() - 1;
    
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {/* {  formatAMPM(new Date(props.date)) } */}
                    { props.date }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {arrayOfWeekdays[dayNameDateLocation] } , { monthNameDateLocation } { monthDayDateLocation }
                </Typography>
            </CardContent>
        </Card>
    )
}


export default DateLocation;