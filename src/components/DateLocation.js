import { Grid, Card, CardContent, Typography, Badge } from '@mui/material';
import moment from 'moment';
import Moment from 'react-moment';

const DateLocation = (props) => {
    
    var arrayOfWeekdays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
    const currentDateTime = moment(props.date);
     
    return  <div className="data">
                <div className="time">
                    <span className="th">{ currentDateTime.hour() }</span>
                    <span className="ts">:</span>
                    <span className="tm">{ currentDateTime.minute() }</span>
                    <span className="ampm">a</span>
                </div>
                <div className="date">{ currentDateTime.format("MMM Do YY") }</div>
                <div className="data-end">
                    <div className="time">
                    <span className="separ">-</span>
                    <span className="th">1</span>
                    <span className="ts">:</span>
                    <span className="tm">00</span>
                    <span className="ampm">a</span>
                    </div>
                    <div className="date">Mon, Feb 7</div>
                </div>
            </div>;
}


export default DateLocation;