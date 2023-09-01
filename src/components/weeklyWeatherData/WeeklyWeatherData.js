import React, {useEffect, useState} from "react";
import './WeeklyWeatherData.css';
import axios from "axios";
import weatherIcon from "../../helpers/weatherIcon";
import convertKelvinToCelsius from "../../helpers/convertKelvinToCelsius";
import getWeekDate from "../../helpers/getWeekDate";

function WeeklyWeatherData({ locationName }) {
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [error,toggleError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData(location) {
      try {
        toggleError(false)
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`, {signal: controller.signal});
        const coord = response.data.coord;
        setWeatherData(response.data);

        const responseWeekly = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`, {signal: controller.signal});
        const weatherData = responseWeekly.data.list.filter((data) => {
          return data.dt_txt.includes("15:00:00");
        });
        setWeeklyWeatherData(weatherData);
      } catch (e) {
        if (e.code !== "ERR_CANCELED") {
          toggleError(true)
          setWeeklyWeatherData([]);
          console.error(e);
        }
      }
    }

    if (locationName) {
      fetchData(locationName);
    }

    return function unmount() {
      controller.abort();
    }
  }, [locationName]);

  return (
    <section className="weekly-weather-data-container">
      {error && <p className="error">Stad niet gevonden, probeer het nogmaals.</p>}
      {Object.keys(weatherData).length > 0 &&
        <>
          <img className="weather-icon" src={weatherIcon(weatherData.weather[0].main)} alt={weatherData.weather[0].description} />
          <p><strong>{convertKelvinToCelsius(weatherData.main.temp)}</strong></p>
          <p><strong>{weatherData.name}</strong></p>
        </>
      }
      <section className="weather-detail-divider">
      {weeklyWeatherData.map((data) => {
        return (
          <article className="day-weather" key={data.dt}>
            <span>{getWeekDate(data.dt)}</span>
            <span>
              {convertKelvinToCelsius(data.main.temp)}
              <img className="weather-icon small" src={weatherIcon(weatherData.weather[0].main)} alt={weatherData.weather[0].description} />
            </span>
          </article>
        )
      })}
      </section>
    </section>
  );
}

export default WeeklyWeatherData;
