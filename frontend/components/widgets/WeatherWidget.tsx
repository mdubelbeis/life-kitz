import { WeatherData } from "@/pages";
import { useState } from "react";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";

interface WeatherWidgetProps {
  data: WeatherData;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  const [mountTime, setMountTime] = useState(new Date().getHours()); // 24 hour clock time only hours
  const [textColor, setTextColor] = useState("");
  const [feelsLikeFahrenheit, setFeelsLikesFahrenheit] = useState(
    Number(data.feels_like * 1.8 + 32).toFixed(0)
  );
  const {
    wind_speed,
    wind_degrees,
    temp,
    humidity,
    sunset,
    min_temp,
    cloud_pct,
    feels_like,
    sunrise,
    max_temp,
  } = data;

  // Updated weather text color based on textColor

  // NEED UPDATE WEATHER FUNCTION TO UPDATE EVERY 30 MINUTES
  // const updateWeather = () => {};

  // console.log(Object.keys(data).length); // length of keys on data .... why?

  const getWeatherIcon = () => {
    if (mountTime > 1800) {
      return (
        <span>
          <TiWeatherNight className="h-20 w-20" />
        </span>
      );
    }

    return (
      <span>
        <TiWeatherSunny className="h-20 w-20" />
      </span>
    );
  };
  return (
    <section className="max-w-4xl">
      <div className="stats flex shadow">
        <div className="stat flex flex-col place-items-center items-center justify-center gap-3">
          <div className="stat-desc">{getWeatherIcon()}</div>
          <div className="stat-title">Feels Like</div>
          <div className="stat-value">
            <span className={`${textColor}`}>{feelsLikeFahrenheit}°F</span>
          </div>
        </div>

        <div className="stat place-items-center">
          <ul className="items flex w-full flex-col items-center justify-center gap-3 tracking-wider">
            <li>Wind Speed: ... {(wind_speed * 1.150779).toFixed(0)} mph</li>
            <li>Wind Degrees: ... {wind_degrees}</li>
            <li>Temp: ... {((temp * 9) / 5 + 32).toFixed(0)}°F</li>
            <li>Humidity: ... {humidity}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
