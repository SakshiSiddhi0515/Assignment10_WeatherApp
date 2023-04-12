import React, { useState } from 'react';
import Search from '../search';
import PresentWeather from '../present-weather';
import {WEATHER_URL, WEATHER_API_KEY} from '../../api'
import Forecast from '../forecast';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function Home() {

    const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast_new, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, long ] = searchData.value.split(" ");

    const currentWeatherGet = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)

    const forecast = fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherGet, forecast])
    .then(async (response) => {
      const currentWeatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...currentWeatherResponse});
      setForecast({city: searchData.label, ...forecastResponse});
    })
    .catch((err) => console.log(err));

    console.log(currentWeather);
    console.log(forecast_new);

  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      {currentWeather && <PresentWeather data={currentWeather} />}
      {forecast_new && <Forecast data={forecast_new} />}
    </div>
  )
}

export default Home