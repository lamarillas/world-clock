import Ubicacion from './Ubicacion';
import moment from 'moment';
import './Ubicaciones.css';
import styled from 'styled-components';

const Ubicaciones = (props) => {

    const removeLocationsHandler = (_uid) => {
        props.onRemoveAppLocationsHandler(_uid);
    }

    let posBandForward = 0;
    let posBandStart = 0;

    if(props.locations.length)
    {
        const dateLocation = props.locations[0].datetime.replace(props.locations[0].utc_offset, '');
        const currentDateTime = moment(dateLocation);
        posBandForward = 664 - (currentDateTime.hours() * 28);
        posBandStart = (currentDateTime.hours() * 28) + 314;
        //console.log('xxx ', props.locations[0]);
    }
    

    const Band = styled.div`
        display: block;
        inset: 11px ${props => (props.posBandForward.toString())}px 11px ${props => (props.posBandStart.toString())}px;
    `;
    
    console.log('Ubicaciones');

    return  <div className="clientarea blink" style={{padding: "0 0px"}} data-listidx="0">
                
                <div id="loading-overlay">
                    <div id="loading-overlay-bg"></div>
                    <div id="loading-overlay-scroller" className="inProgress"></div>
                </div>

                {/* Encargados del marcador	  */}
                <div id="controls">
                    <div id="glass" style={{zIndex: "10000", inset: "0px 22px 0px 315px"}}></div>
                    <div id="band-whiteout-left" style={{inset: "14px 682px 11px 315px", display: "none"}}></div>
                    <div id="band-whiteout-right" style={{inset: "14px 23px 11px 344px", display: "none"}}></div>
                    <div className="cband" original-title="" style={{inset: "14px 667px 14px 317px", opacity: "0.1"}}></div>
                    
                    <Band className="band" original-title="" posBandForward={posBandForward} posBandStart={posBandStart}>
                        <div style={{display: "none"}}></div>
                        <span className="homeHour" style={{top: "auto", bottom: "122px"}}></span>
                    </Band>

                    <div id="band-handle-left" className="band-handle" style={{top: "11px", left: "328px", height: "154px"}}></div>
                    <div id="band-handle-right" className="band-handle" style={{top: "11px", left: "340px", height: "154px"}}></div>
                </div>



                {
                    props.locations.map((item) => {



                        return  <Ubicacion key={Math.random()} 
                                    location={item} 
                                    onRemoveLocationsHandler={removeLocationsHandler}>
                                </Ubicacion>;
                    })

                }


            </div>;
}

export default Ubicaciones;