import { useState } from "react";
import Button from '@mui/material/Button';


const SearchForm = (props) => {

        const [locationEntered, setEnteredLocation] = useState('');

        const locationChangeHandler = (e) => {
            setEnteredLocation(e.target.value.trim());
        }

        const locationClickHandler = (e) => {
            e.preventDefault();
            // console.log(locationEntered);

            props.onSearchLocation(locationEntered);

            setEnteredLocation('');
        }

        // const locationKeyDownHandler = (e) => {
        //     e.preventDefault();
        //     setEnteredLocation(locationEntered);
        //     console.log(e);
        // }

        return (
            <form>
                <div>
                    <div>
                        <input type="text" value={locationEntered} onChange={locationChangeHandler} ></input>
                    </div>
                </div>
                <div>
                    <Button variant="contained" onClick={locationClickHandler}>Add location</Button>
                </div>
            </form>
        );
}


export default SearchForm;