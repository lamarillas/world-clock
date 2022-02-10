import { useState } from "react";

const SearchForm = (props) => {

         const [locationEntered, setEnteredLocation] = useState('');

        const locationChangeHandler = (e) => {
            setEnteredLocation(e.target.value.trim());
        }

        const locationSubmitHandler = (e) => {
            e.preventDefault();

            if(locationEntered.trim().length > 2) {
                props.onSearchLocation(locationEntered);
                setEnteredLocation('');
            }
        }

        return  <div className="toolbar" id="toolbar-default" style={{position: "relative", display: "block"}}>
                    {/* Sort by offset from home buttons */}
                    <span className="item" id="sorter" style={{textAlign: "center", width: "41px", cursor: "default", marginTop: "12px"}}>
                        <a className="sort-up" title="Sort by smallest offset first"></a>
                        <a className="sort-down" title="Sort by largest offset first"></a>
                    </span>
                        {/* Location search */}
                        <span className="item">
                        <div id="searchIcon"></div>
                        <form onSubmit={locationSubmitHandler}>
                            <input type="text" 
                                value={locationEntered} 
                                onChange={locationChangeHandler} 
                                name="location" 
                                id="location" 
                                maxLength={50}>
                            </input>
                        </form>
                        {/* <Button variant="contained" onClick={locationClickHandler}>Add location</Button> */}
                        <div style={{display: "none"}} id="location_list" className="location_list"></div>
                    </span>
                </div>;
}


export default SearchForm;