import DateLocation from './DateLocation';
import './Ubicacion.css';

const Ubicacion = (props) => {

    const [ country, location ] = props.location.timezone.split('/');

    return (
        <div className='container'>
            
            {/* <div style={{position: 'absolute', height: '0'}}>
                <div className='buttons'>
                    <a className='close' href='#' > X </a>
                </div>
            </div> */}
            
            <div id='home' className='icon'>
                <span></span>
            </div>
            
            <div className='location'>
                <div className='city'>
                    <b>{ location + ' ' }</b>
                    <small>{ props.location.abbreviation }</small>
                </div>
                <div className='country'>{ country }</div>
            </div>
            
            <DateLocation date={ props.location.datetime }></DateLocation>    

            <div className='hourline'>

            </div>

        </div>
    );
}


export default Ubicacion;