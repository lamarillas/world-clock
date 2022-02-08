import Ubicacion from './Ubicacion';
import './Ubicaciones.css';


const Ubicaciones = (props) => {

    const removeLocationsHandler = (uid) => {
        props.onRemoveAppLocationsHandler(uid);
    }

    
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
                    <div className="band" original-title="" style={{display: "block", inset: "11px 664px 11px 314px"}}>
                        <div style={{display: "none"}}></div>
                        <span className="homeHour" style={{top: "auto", bottom: "122px"}}></span>
                    </div>
                    <div id="band-handle-left" className="band-handle" style={{top: "11px", left: "328px", height: "154px"}}></div>
                    <div id="band-handle-right" className="band-handle" style={{top: "11px", left: "340px", height: "154px"}}></div>
                </div>

                {
                    props.locations.map(item => (
                        <Ubicacion key={Math.random()} location={item} onRemoveLocationsHandler={removeLocationsHandler}></Ubicacion> 
                    ))

                }
            </div>;
}

export default Ubicaciones;