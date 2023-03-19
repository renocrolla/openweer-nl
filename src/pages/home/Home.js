import React, {useState} from "react";
import './Home.css';
import WeatherData from "../../components/weatherData/WeatherData";
import SearchBox from "../../components/searchBox/SearchBox";

function Home() {
  const [location, setLocation] = useState("");

    return  (
    <article className="home-container">
      <p className="welcome-text">Welkom, zoek op een stad om de huidige weersomstandigheden te zien! 😎</p>
      <SearchBox setLocationHandler= {setLocation} />
      <WeatherData locationName = {location}/>
    </article>
  );
}

export default Home;
