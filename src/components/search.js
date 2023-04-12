import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_WEATHER_OPTIONS, CityWeatheroptions } from "../api";


const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const loadOptions = (cityValue) => {
        return fetch(`${GEO_API_WEATHER_OPTIONS}/cities?minPopulation=1000000&namePrefix=${cityValue}`, CityWeatheroptions)
        .then(response => response.json())
        .then((response) => {
            return{
                options : response.data.map((city) => {
                    return{
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch(err => console.error(err));
    }

    return(
        <AsyncPaginate
        placeholder="Enter a city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        />
    )
}

export default Search;