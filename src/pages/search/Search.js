import React, {useState} from "react";
import './Search.css';
import SearchBox from "../../components/searchBox/SearchBox";
import WeatherData from "../../components/weatherData/WeatherData";

function Search() {
  const [location1, setLocation1] = useState("");
  const [location2, setLocation2] = useState("");
  const [location3, setLocation3] = useState("");
  const [location4, setLocation4] = useState("");
  const [location5, setLocation5] = useState("");

  return (
    <section id="multi-search-container">
      <article className="search-container">
        <SearchBox setLocationHandler= {setLocation1} />
        <WeatherData locationName = {location1} />
      </article>
      <article className="search-container">
        <SearchBox setLocationHandler= {setLocation2}/>
        <WeatherData locationName = {location2} />
      </article>
      <article className="search-container">
        <SearchBox setLocationHandler= {setLocation3}/>
        <WeatherData locationName = {location3} />
      </article>
      <article className="search-container">
        <SearchBox setLocationHandler= {setLocation4}/>
        <WeatherData locationName = {location4} />
      </article>
      <article className="search-container">
        <SearchBox setLocationHandler= {setLocation5}/>
        <WeatherData locationName = {location5} />
      </article>
    </section>
  );
}

export default Search;
