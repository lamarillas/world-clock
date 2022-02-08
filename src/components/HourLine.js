const am = 12;
const pm = 12;

const HourLine = ({currentDateTime}) => {

    //let amCurrentDateTime = {...currentDateTime};

    return  <div className="hourline">
                <ul className="_AP">

                {
                    [...Array(am)].map((e, i) =>
                        {                      
                            if(i === 0) {
                                return <li key={i} className="tod_c tod_selected" t="2/7/2022 00:00">
                                            <div>{ currentDateTime.format('dd') }</div>
                                            <b>{ currentDateTime.format('MMM') }</b>
                                            <i>{ currentDateTime.format('DD') }</i>
                                        </li>
                            }
                               
                            return <li key={i} className="tod_n">
                                        <b>{ i }</b>
                                        <u>am</u>
                                        <em>MST</em>
                                        <em></em>
                                    </li>
                        }
                    )    
                }
                {
                    [...Array(pm)].map((e, i) =>
                    {                      
                        if(i === 11) {
                            return <li key={i} className="tod_n tod_boundary">
                                        <b>{ i }</b>
                                        <u>pm</u>
                                        <em>MST</em>
                                        <em></em>
                                    </li>
                        } 
                           
                        return <li key={i} className="tod_n">
                                    <b>{  i == 0 ? 12 : i }</b>
                                    <u>pm</u>
                                    <em>MST</em>
                                    <em></em>
                                </li>
                    }
                    )    
                }                                        
                </ul>
            </div>;
}

export default HourLine;
