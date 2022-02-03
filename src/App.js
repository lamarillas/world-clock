import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import Ubicaciones from './components/Ubicaciones';

function App() {
  
  

  //let locations = [];

  const [locations, setLocations] = useState([]);

  const onFetchTimeZones = () => {

    fetch('http://worldtimeapi.org/api/timezone').then(respose => {
      return respose.json()
    }).then(data => {
      
      
      const locationsTransformed = data.map( loc => {
        
        const [ country, location ] = loc.split('/');

        return {
          country,
          location
        }
      });

      //locations = locationsTransformed;
      setLocations(locationsTransformed);
      //console.log(locations);
    })

  }

  const [dataLocations, setDataLocations] = useState([])

  const onSearchLocationHandler = (location) => {
    console.log('App.js', location);
    console.log(location);

    if(!locations.length) {
      console.warn('El objeto Locations esta vacio');
    } else {
      const _location = locations.find(elem => elem.location == location);
      if(!_location) {
        console.warn(`La localidad ${location} no se encuentra en la lista.`);
      } else {
        console.log('Location finded ', _location);


        fetch(`http://worldtimeapi.org/api/timezone/${_location.country}/${_location.location}`).then( response => {
          return response.json()
        }).then( data => {

          setDataLocations(oldArray => [...oldArray, data]);

        })
      }
    }
    

    

  }

  return (
    <div>
      <button onClick={onFetchTimeZones}>Fetch All</button>
      <SearchForm onSearchLocation={onSearchLocationHandler}></SearchForm>
      <div>
        <Ubicaciones locations={dataLocations} />
      </div>
    </div>

  );
}

export default App;
