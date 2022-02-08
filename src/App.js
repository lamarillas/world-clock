import { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Ubicaciones from './components/Ubicaciones';

function App() {
  
  const [locations, setLocations] = useState([]);
  const [dataLocations, setDataLocations] = useState([])

  const getAllTimeZones = () => {

    fetch('http://worldtimeapi.org/api/timezone').then(response => {
      return response.json();
    }).then(data => {
      
      
      const locationsTransformed = data.map( loc => {
        
        const [ country, location ] = loc.split('/');

        return {
          country,
          location
        }
      });

      setLocations(locationsTransformed);
    })
  }

   const onSearchLocationHandler = (location) => {
    
    if(!locations.length) {
      console.warn('El objeto Locations esta vacio');
    } else {
      const _location = locations.find(elem => elem.location.trim().toLowerCase() == location.trim().toLowerCase() );
      if(!_location) {
        console.warn(`La localidad ${location} no se encuentra en la lista.`);
      } else {

        //console.log('Location finded ', _location);

        fetch(`http://worldtimeapi.org/api/timezone/${_location.country}/${_location.location}`).then( response => {
          return response.json()
        }).then( data => {

          setDataLocations(oldArray => [...oldArray, {...data, uid: (new Date).getTime()}]);

        })
      }
    }
  }

  const removeAppLocationsHandler = (uid) => {
    var newDataLocations = dataLocations.filter(e => e.uid != uid);
    setDataLocations(newDataLocations);
  }

  useEffect(() => {
    getAllTimeZones();
  }, []);
    

  

  return  <div className="wrapper">
            <div id="locations_wrapper">
              <div id="locations">
                {/* <Button variant="contained" onClick={getAllTimeZones}>Fetch All</Button> */}
                <SearchForm onSearchLocation={onSearchLocationHandler}></SearchForm>
                <Ubicaciones locations={dataLocations}  onRemoveAppLocationsHandler={removeAppLocationsHandler} />
              </div>
            </div>
          </div>;
}

export default App;