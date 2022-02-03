import Ubicacion from './Ubicacion';
import './Ubicaciones.css';

const Ubicaciones = (props) => {
    return (

        <div className='locations'>

            {/* <Ubicacion location={props.locations[0]}></Ubicacion>
            <Ubicacion location={props.locations[1]}></Ubicacion>
            <Ubicacion location={props.locations[2]}></Ubicacion> */}

            {
                props.locations.map(item => (
                    <Ubicacion key={Math.random()} location={item}></Ubicacion> 
                ))

            }

        </div>
    )
}

export default Ubicaciones;