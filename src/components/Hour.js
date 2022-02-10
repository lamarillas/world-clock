
const Hour = (props) => {

    const { longHour, hour, ampm } = props.hr;
    const dayClass = 'tod_n' + (longHour == 23 ? ' tod_boundary' : '');

    return <li key={longHour} className={dayClass}>
        <b>{ hour }</b>
        <u>{ ampm }</u>
        <em>MST</em>
        <em></em>
    </li>;
}

export default Hour;