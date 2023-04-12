import './App.css';
import React, { useState } from 'react';
import Search from './components/search';
import PresentWeather from './components/present-weather';
import {WEATHER_URL, WEATHER_API_KEY} from './api';
import Forecast  from './components/forecast';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home/Home';
import Monday from './components/Monday/Monday';

// const api ={
//   key: "d341299812c6ef69e4493d03292f6e6a",
//   base: ""
// }

function App() {


  // const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast_new, setForecast] = useState(null);

  // const handleOnSearchChange = (searchData) => {
  //   const [lat, long ] = searchData.value.split(" ");

  //   const currentWeatherGet = fetch(`${WEATHER_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)

  //   const forecast = fetch(`${WEATHER_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`)

  //   Promise.all([currentWeatherGet, forecast])
  //   .then(async (response) => {
  //     const currentWeatherResponse = await response[0].json();
  //     const forecastResponse = await response[1].json();

  //     setCurrentWeather({city: searchData.label, ...currentWeatherResponse});
  //     setForecast({city: searchData.label, ...forecastResponse});
  //   })
  //   .catch((err) => console.log(err));

  //   console.log(currentWeather);
  //   console.log(forecast_new);

  // }

  return (
    //  {/* <nav>
    //     <Link to = '/'>Home</Link> {" "}
    //     <Link to = '/AboutUs'>AboutUs</Link> {" "}
    //     <Link to = '/Contact'>Contact</Link> {" "}
    //     <Link to = '/Jobs'>Jobs</Link> {" "}
    //   </nav> 

    //   <Routes> */}
    //     {/* <Route exact path="/" element={<Login />} />
    //     <Route path='/Home' element={<Home />}></Route>
    //     <Route path='/AboutUs' element={<AboutUs />}></Route>
    //     <Route path='/Contact' element={<Contact />}></Route>
    //     <Route path='/Jobs' element={<Jobs />}></Route>
    //   </Routes> */}
    
   
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route path='/Monday' element={<Monday />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
