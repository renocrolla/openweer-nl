import React, {useState} from "react";
import './Search.css';
import SearchBox from "../../components/searchBox/SearchBox";
import WeatherData from "../../components/weatherData/WeatherData";
import ToggleButton from "../../components/weeklyWeatherToggle/ToggleButton";
import WeeklyWeatherData from "../../components/weeklyWeatherData/WeeklyWeatherData";

function Search() {
  const [weeklyToggle, setWeeklyToggle] = useState(false);
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [location4, setLocation4] = useState("");
  const [location5, setLocation5] = useState("");

  return (
    <section>
      <ToggleButton setToggleButton={setWeeklyToggle} />
      <div id="multi-search-container">
        <article className="search-container">
          <SearchBox setLocationHandler= {setLocation1} />
          {!weeklyToggle && <WeatherData locationName = {location1} />}
          {weeklyToggle && location1 && <WeeklyWeatherData locationName = {location1} />}
        </article>
        <article className="search-container">
          <SearchBox setLocationHandler= {setLocation2}/>
          {!weeklyToggle && <WeatherData locationName = {location2} />}
          {weeklyToggle && location2 && <WeeklyWeatherData locationName = {location2} />}
        </article>
        <article className="search-container">
          <SearchBox setLocationHandler= {setLocation3}/>
          {!weeklyToggle && <WeatherData locationName = {location3} />}
          {weeklyToggle && location3 && <WeeklyWeatherData locationName = {location3} />}
        </article>
        <article className="search-container">
          <SearchBox setLocationHandler= {setLocation4}/>
          {!weeklyToggle && <WeatherData locationName = {location4} />}
          {weeklyToggle && location4 && <WeeklyWeatherData locationName = {location4} />}
        </article>
        <article className="search-container">
          <SearchBox setLocationHandler= {setLocation5}/>
          {!weeklyToggle && <WeatherData locationName = {location5} />}
          {weeklyToggle && location5 && <WeeklyWeatherData locationName = {location5} />}
        </article>
      </div>
      </section>
  );
}

export default Search;
