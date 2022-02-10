import moment from 'moment';
import DateLocation from './DateLocation';
import HourLine from './HourLine';
// import './Ubicacion.css';

const Ubicacion = (props) => {
    const _uid = props.location._uid;
  
    const [ country, location ] = props.location.timezone.split('/');

    const dateLocation = props.location.datetime.replace(props.location.utc_offset, '');
    const currentDateTime = moment(dateLocation);

    const dateTimeHome = moment(props.location._dateTimeHome);
    const offsetHour = currentDateTime.diff(dateTimeHome, 'hours');

    console.log('isAfter ', currentDateTime.isAfter(dateTimeHome, 'days'));

    console.log('offsetHour ', offsetHour);


    const removeLocationHandler = () => {
        props.onRemoveLocationsHandler(_uid);
    }

    //console.log('Ubicacion Date Time ', props.location);

    return  <div lid="4013704" className="container srt" alias="0" data-itemidx="0">
                
                <div style={{position: "absolute", height: "0px", display: props.location.isHome ? 'none' : 'block'}}>
                    <div className="buttons">
                        <button className="close" onClick={removeLocationHandler} title="Remove from the list"> X </button>
                    </div>
                </div>
                
                <div className="icon" id="home" original-title="Home Time Zone (GMT-7 = MST)">
                    <span>+0</span>
                </div>
                
                <div className="location">
                    <div className="city">
                        <b>{ location + ' ' }</b>
                        <small original-title="MST = GMT-7">{ props.location.abbreviation }</small>
                    </div>
                    <div className="country">{ country }</div>
                </div>

                <DateLocation date={dateLocation}></DateLocation>

                <HourLine currentDateTime={currentDateTime} offsetHour={offsetHour} ></HourLine>


            </div>;
}

export default Ubicacion;
