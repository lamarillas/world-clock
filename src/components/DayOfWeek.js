const DayOfWeek = (props) => {

    const { longHour } = props.hr;
    
    const dayClass = 'tod_c' + (longHour == 0 ? ' tod_selected' : '');

    return <li key={longHour} className={dayClass}>
        <div>{ props.dateTime.format('dd') }</div>
        <b>{ props.dateTime.format('MMM') }</b>
        <i>{ props.dateTime.format('DD') }</i>
    </li>;

}

export default DayOfWeek;