import Ubicacion from './Ubicacion';
import './Ubicaciones.css';

const Ubicaciones = (props) => {
    return (

        <div className='locations'>

            {
                props.locations.map(item => (
                    <Ubicacion key={Math.random()} location={item}></Ubicacion> 
                ))

            }

        </div>
    )
}

export default Ubicaciones;