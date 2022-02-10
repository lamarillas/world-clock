import { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Ubicaciones from './components/Ubicaciones';

function App() {
  
  const [locations, setLocations] = useState([]);
  const [dataLocations, setDataLocations] = useState([])
  const [dateTimeHome, setDateTimeHome] = useState('');

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

          if(!dataLocations.length) {
            
            setDateTimeHome(data.datetime.replace(data.utc_offset, ''));
            setDataLocations(oldArray => [...oldArray, {...data, _uid: (new Date).getTime(), _dateTimeHome: data.datetime.replace(data.utc_offset, ''), isHome: true}]);
          
          } else {

            setDataLocations(oldArray => [...oldArray, {...data, _uid: (new Date).getTime(), _dateTimeHome: dateTimeHome, isHome: false}]);
          }

          
          console.log('Data Locations', dataLocations);
        })
      }
    }
  }

  const removeAppLocationsHandler = (_uid) => {
    var newDataLocations = dataLocations.filter(e => e._uid != _uid);
    if(newDataLocations.length) {
      const firstDataLocation = newDataLocations[0];
      setDateTimeHome(firstDataLocation.datetime.replace(firstDataLocation.utc_offset, ''));
    }
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