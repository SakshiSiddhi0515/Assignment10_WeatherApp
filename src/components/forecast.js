import{
    Accordion,
    AccordionItemHeading,
    AccordionItem,
    AccordionItemPanel,
    AccordionItemButton
} from "react-accessible-accordion";
import './forecast.css'
import { DateTime} from "luxon";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Monday from './Monday/Monday';

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const FDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));

    

    return (
        <>
            <label className="title">Daily</label>
            {/* <p className="Day-Date">{formatToLocalTime(data.list[0].dt, data.city.timezone)}</p> */}
            <Accordion allowZeroExpanded>
            <Routes>
                <Route path='/Monday' element={<Monday />}></Route>
            </Routes>
                {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day">{FDays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{item.main.temp_min}°C /{" "}
                                {item.main.temp_max}°C
                                </label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                        <label className="hourly-title">Hourly Forecast</label>
                            <div className="daily-details-grid-item">
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[1].dt).substring(35,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[idx].main.temp}C</p>
                                    <Link to = '/Monday'>Show weather</Link> {" "}
                                </div>
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[2].dt).substring(34,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx+1].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[(idx+1)].main.temp}C</p>
                                </div>
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[3].dt).substring(34,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx+2].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[(idx+2)].main.temp}C</p>
                                </div>
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[4].dt).substring(34,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx+3].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[(idx+3)].main.temp}C</p>
                                </div>
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[5].dt).substring(34,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx+4].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[(idx+4)].main.temp}C</p>
                                </div>
                                <div className="hourly">
                                    <p className="hourly-forecast">{formatToLocalTime(data.list[6].dt).substring(34,)}</p>
                                    <img className="hourly-image" alt="" src={`icons/${data.list[idx+5].weather[0].icon}.png`}></img>
                                    <p className="hourly-temp">{data.list[(idx+5)].main.temp}°C</p>
                                </div>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;