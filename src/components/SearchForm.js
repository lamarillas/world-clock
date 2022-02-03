import { useState } from "react";


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
                    <button onClick={locationClickHandler}>Add location</button>
                </div>
            </form>
        );
}


export default SearchForm;