import { SyntheticEvent, useState } from 'react';
import { TiWeatherNight, TiWeatherSunny } from 'react-icons/ti';

import { WeatherData } from '@/pages/index';

const defaultWeather = {
  wind_speed: 0,
  wind_degrees: 0,
  temp: 0,
  humidity: 0,
  sunset: 0,
  min_temp: 0,
  cloud_pct: 0,
  feels_like: 0,
  sunrise: 0,
  max_temp: 0,
};

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>(defaultWeather);
  const [mountTime, setMountTime] = useState(new Date().getHours()); // 24 hour clock time only hours
  const [textColor, setTextColor] = useState('');
  const [feelsLikeFahrenheit, setFeelsLikesFahrenheit] = useState(
    Number(weather.feels_like * 1.8 + 32).toFixed(0)
  );
  const [zipCode, setZipCode] = useState(''); // TODO: Get user location from browser
  let {
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
  } = weather;
  const [userLocation, setUserLocation] = useState('');

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

  // useEffect(() => {
  //   console.log(weather);
  // }, [weather]);

  const updateWeatherData = async () => {
    try {
      const weather_widget_res = await fetch(
        // TODO: Write to separate file or hook
        `https://api.api-ninjas.com/v1/weather?zip=${zipCode}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
          },
        }
      );
      const updatedWeather = await weather_widget_res.json();
      // console.log(updatedWeather);
      setWeather(updatedWeather);
      setUserLocation(zipCode);
    } catch (error) {
      console.log(`${error} - Weather Widget Data Fetch Failed`);
    }
  };

  const handleZipCode = (e: SyntheticEvent) => {
    e.preventDefault();
    // Fetch data
    updateWeatherData();
  };
  return (
    <>
      {userLocation ? (
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
                <li>
                  Wind Speed: ... {(wind_speed * 1.150779).toFixed(0)} mph
                </li>
                <li>Wind Degrees: ... {wind_degrees}</li>
                <li>Temp: ... {((temp * 9) / 5 + 32).toFixed(0)}°F</li>
                <li>Humidity: ... {humidity}</li>
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <div className="stats flex max-w-4xl">
          <div className="stat flex flex-col place-items-center items-center justify-center gap-3">
            <form className="form-control" onSubmit={handleZipCode}>
              <div className="flex gap-3">
                <label className="input-group">
                  <span>Zipcode</span>
                  <input
                    type="number"
                    min={5}
                    placeholder="Enter your zipcode"
                    className="input-bordered input"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </label>
                <button className="btn" type="submit">
                  FIND
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;
