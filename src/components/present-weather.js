import "./present-weather.css"
import { DateTime} from "luxon";

const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);



const PresentWeather = ({data}) => {
    return (
        <div className="weather-container">
            <div className="top">
                <div>
                <p className="city">{data.city}</p>
                <p className="weather">{data.weather[0].description}</p>
                </div>
                <img className="weather-icon" src={`icons/${data.weather[0].icon}.png`} alt="sunny" />
            </div>
            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                <div className="parameter-row">
                        <span className="parameter-label">Highest Temperature</span>
                        <span className="parameter-value">{data.main.temp_max}°C</span>
                </div>
                <div className="parameter-row">
                <span className="parameter-label">Lowest Temperature</span>
                        <span className="parameter-value">{data.main.temp_min}°C</span>
                </div>
            </div>
            </div>
            <p>{formatToLocalTime(data.dt, data.timezone)}</p>

        </div>
        
    );
}

export default PresentWeather;

