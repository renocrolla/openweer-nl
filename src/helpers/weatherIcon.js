import Sun from "../assets/sun.png";
import Cloud from "../assets/clouds.png";
import Wind from "../assets/wind.png";
import Drizzle from "../assets/drizzle.png";
import Rain from "../assets/rain.png";
import Snow from "../assets/snow.png";


function weatherIcon(weatherType) {
  switch (weatherType) {
    case 'Clear':
      return Sun;
    case 'Clouds':
      return Cloud;
    case 'Drizzle':
      return Drizzle;
    case 'Rain':
      return Rain;
    case 'Snow':
      return Snow;
    case 'Mist':
    case 'Haze':
    case 'Smoke':
    case 'Fog':
    default:
      return Wind;
  }
}

export default weatherIcon;
