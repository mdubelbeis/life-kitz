import { SyntheticEvent, useEffect, useState } from 'react';
import { TiWeatherNight, TiWeatherSunny } from 'react-icons/ti';

import Button from '@/components/ui/Button';
import { WeatherData } from '@/pages/index';

interface defaultWeather {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>({} as WeatherData);
  const [mountTime, setMountTime] = useState(new Date().getHours()); // 24 hour clock time only hours
  const [tempTextColor, setTempTextColor] = useState('');
  const [weatherCardBgColor, setWeatherCardBgColor] = useState('');
  const [weatherDataTextColor, setWeatherDataTextColor] = useState('');
  const [zipCode, setZipCode] = useState<string | null>(
    JSON.parse(localStorage.getItem('zipcode')) || null
  );
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
  const [userLocation, setUserLocation] = useState(
    localStorage.getItem('zipcode')
  );

  const getWeatherIcon = () => {
    if (mountTime > 18) {
      return (
        <span>
          <TiWeatherNight className="h-20 w-20" fill="gray" />
        </span>
      );
    } else {
      return (
        <span>
          <TiWeatherSunny className="h-20 w-20" fill="yellow" />
        </span>
      );
    }
  };

  const updateWeatherData = async (zip?: string) => {
    if (zip) {
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

        setWeather(updatedWeather);
        setUserLocation(zipCode);
      } catch (error) {
        console.log(`${error} - Weather Widget Data Fetch Failed`);
      }
    } else {
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

        setWeather(updatedWeather);
        setUserLocation(zipCode);
        localStorage.setItem('zipcode', JSON.stringify(zipCode));
      } catch (error) {
        console.log(`${error} - Weather Widget Data Fetch Failed`);
      }
    }
  };

  useEffect(() => {
    if (userLocation) {
      updateWeatherData(zipCode);
    }

    if (mountTime > 18) {
      setWeatherCardBgColor('bg-slate-800');
      setWeatherDataTextColor('text-slate-300');
    } else {
      setWeatherCardBgColor('bg-blue-400');
      setWeatherDataTextColor('text-white');
    }
  }, [mountTime]);

  const handleZipCode = (e: SyntheticEvent) => {
    e.preventDefault();
    // Fetch data
    updateWeatherData();
  };

  const getWindDirection = () => {
    if (wind_degrees > 337.5) {
      return 'N';
    } else if (wind_degrees > 292.5) {
      return 'NW';
    } else if (wind_degrees > 247.5) {
      return 'W';
    } else if (wind_degrees > 202.5) {
      return 'SW';
    } else if (wind_degrees > 157.5) {
      return 'S';
    } else if (wind_degrees > 122.5) {
      return 'SE';
    } else if (wind_degrees > 67.5) {
      return 'E';
    } else if (wind_degrees > 22.5) {
      return 'NE';
    } else {
      return 'N';
    }
  };
  return (
    <>
      {userLocation ? (
        <div
          className={`stats relative mx-auto flex w-full p-6 lg:flex-col lg:px-0 ${weatherCardBgColor} ${weatherDataTextColor} m-4 mx-auto flex-col items-center justify-center rounded-lg py-24 shadow-lg lg:rounded-none lg:rounded-l-lg`}
        >
          {/* Close Button */}

          <button
            type="button"
            className="absolute left-3 top-3 bg-transparent text-xl font-bold text-black hover:cursor-pointer hover:bg-transparent hover:text-logo active:text-quaternary"
            onClick={() => {
              setUserLocation(null);
              setZipCode(null);
              localStorage.removeItem('zipcode');
            }}
          >
            X
          </button>

          <div className="stat flex flex-col place-items-center items-center justify-center gap-3">
            <h1 className="mb-6 text-center font-cedarville text-6xl text-black">
              Weather
            </h1>
            <div className="stat-desc">{getWeatherIcon()}</div>
            <div className="text:lg stat-value text-black lg:text-6xl">
              <span className={`${tempTextColor} `}>
                {temp ? `${((temp * 9) / 5 + 32).toFixed(0)} °F` : 'Fetching'}
              </span>
            </div>
          </div>

          <div className="hidden md:stat md:block md:place-items-center">
            <ul className="items flex w-full flex-col items-center justify-center gap-3 font-thin tracking-wider text-black lg:text-2xl">
              {wind_speed ? (
                <li>
                  Wind Speed: ... {(wind_speed * 1.150779).toFixed(0)} mph
                </li>
              ) : (
                <li>Wind Speed: ... Fetching</li>
              )}
              {wind_degrees ? (
                <li>
                  Wind Degrees: ... {wind_degrees} {getWindDirection()}
                </li>
              ) : (
                <li>Wind Degrees: ... Fetching</li>
              )}
              {temp ? (
                <li>Temp: ... {((temp * 9) / 5 + 32).toFixed(0)}°F</li>
              ) : (
                <li>Temp: ... Fetching</li>
              )}
              {humidity ? (
                <li>Humidity: ... {humidity}%</li>
              ) : (
                <li>Humidity: ... Fetching</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <div className=" mx-auto flex w-full bg-inherit py-32 md:w-6/12">
          <div className=" flex w-full flex-col place-items-center items-center justify-center p-0">
            <h1 className="mb-6 text-center font-cedarville text-6xl">
              Weather
            </h1>
            <form
              className="form-control flex w-full flex-col items-center justify-center gap-6 lg:w-10/12"
              onSubmit={handleZipCode}
            >
              <div className="w-full lg:w-11/12">
                <label className="input-group w-full shadow-lg">
                  <span>ZIP</span>
                  <input
                    type="number"
                    min={0o501}
                    max={99950}
                    placeholder="Get your local weather"
                    className="input-bordered input w-full"
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                </label>
              </div>
              <Button id="primary" type="submit">
                Get Weather
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherWidget;
