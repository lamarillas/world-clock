import DayOfWeek from './DayOfWeek';
import Hour from './Hour';

const HourLine = ({currentDateTime, offsetHour}) => {

    const arrayHourList = [...Array(24)].map((e, i) => {
        return {
            hour: (i <= 12 ? i : i - (12)),
            ampm: (i < 12 ? 'am' : 'pm'),
            longHour: i
        }
    });

    const firstIndex = (offsetHour < 0) ?  24 - Math.abs(offsetHour) : 24 + offsetHour;

    return  <div className="hourline">
                <ul className="_AP">
                {
                    arrayHourList.map((e, i) =>
                        {   
                            // Sin diferencia de HORA - OK
                            if(offsetHour == 0) {

                                if(i <= firstIndex) {
                                    if(e.longHour === 0)
                                        return <DayOfWeek key={e.longHour} hr={e} dateTime={currentDateTime} ></DayOfWeek>                                                
                                    return <Hour key={e.longHour} hr={e}></Hour>
                                }
                            
                            } else if(offsetHour > 0 && i >= offsetHour) { 
                                return <Hour key={e.longHour} hr={e}></Hour>

                            } else if(offsetHour < 0 && (i > 23 - (Math.abs(offsetHour) + 1))) {
                                return <Hour key={e.longHour} hr={e}></Hour>
                            }
                        }
                    )    
                }

                {/************ Segunda Barrida ************/}
                {
                    arrayHourList.map((e, i) =>
                    {        
                        // Con diferencia positiva. - OK
                        if(offsetHour > 0) {

                            if(i < offsetHour) {
                                if(e.longHour === 0) {
                                    // Borde Redondo Inicio de Dia **** SIGUIENTE - OK
                                    const cloneNextDay = currentDateTime.clone();
                                    const nextDay = cloneNextDay.add(1, 'days');

                                    return <DayOfWeek key={e.longHour} hr={e} dateTime={nextDay} ></DayOfWeek>                                                
                                }
                                return <Hour key={e.longHour} hr={e}></Hour>                                        
                            }

                        } else if(offsetHour < 0) { 
                            // Con diferencia negativa. - OK
                            if(i <= 23 - (Math.abs(offsetHour) + 1)) {
                                if(e.longHour === 0)
                                    return <DayOfWeek key={e.longHour} hr={e} dateTime={currentDateTime} ></DayOfWeek>                                                

                                return <Hour key={e.longHour} hr={e}></Hour>        
                            }
                        }                        
                    })    
                }                                        
                </ul>
            </div>;
}

export default HourLine;
