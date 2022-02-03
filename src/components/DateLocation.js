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
        <div className='data'>
            <div className='time'>
                {/* 2:23 p */}
                {/* { hourDateLocation }:{ minuteDateLocation } */}
                {  formatAMPM(new Date(props.date)) }
            </div>
            <div className='date'>
                {/* Wed, Feb 2 */}
                {arrayOfWeekdays[dayNameDateLocation] } , { monthNameDateLocation } { monthDayDateLocation }
            </div>
        </div>
    )
}


export default DateLocation;