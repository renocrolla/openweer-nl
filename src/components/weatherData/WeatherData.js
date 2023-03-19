import React, {useEffect, useState} from "react";
import './WeatherData.css';
import axios from "axios";
import convertKelvinToCelsius from "../../helpers/convertKelvinToCelsius";
import weatherIcon from "../../helpers/weatherIcon";

function WeatherData({ locationName }) {
    const [weatherData, setWeatherData] = useState({});
    const [error,toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData(location) {
            try {
                toggleError(false)
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location},nl&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&lang=nl`, {signal: controller.signal});
                setWeatherData(response.data);
            } catch (e) {
                toggleError(true)
                setWeatherData("");
                console.error(e);
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
        <section>
            {error && <p className="error">Stad niet gevonden, probeer het nogmaals.</p>}
            {Object.keys(weatherData).length > 0 &&
                <article className="weather-data-container">
                    <img className="weather-icon" src={weatherIcon(weatherData.weather[0].main)} alt={weatherData.weather[0].description} />
                    <p><strong>{convertKelvinToCelsius(weatherData.main.temp)}</strong></p>
                    <p><strong>{weatherData.name}</strong></p>
                    <p className="weather-detail-divider">Weer: {weatherData.weather[0].description}</p>
                    <p>Luchtvochtigheid: {weatherData.main.humidity}%</p>
                    <p>Windsnelheid: {weatherData.wind.speed} km/u</p>
                    <p>Zicht: {weatherData.visibility}m</p>
                </article>
            }
        </section>
    );
}

export default WeatherData;
