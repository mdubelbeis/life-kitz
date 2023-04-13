import { WeatherData } from "@/pages";
import { useState } from "react";
import { TiWeatherNight, TiWeatherSunny } from "react-icons/ti";

interface WeatherWidgetProps {
  data: WeatherData;
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  const [mountTime, setMountTime] = useState(new Date().getHours()); // 24 hour clock time only hours
  const [textColor, setTextColor] = useState("");

  const tempInFahrenheit = Number(data.feels_like * 1.8 + 32).toFixed(0);

  // NEED UPDATE WEATHER FUNCTION TO UPDATE EVERY 30 MINUTES
  // const updateWeather = () => {};

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
    <section>
      <div className="stats shadow">
        <div className="stat flex flex-col place-items-center gap-3">
          <div className="stat-desc">{getWeatherIcon()}</div>
          <div className="stat-title">Feels Like</div>
          <div className="stat-value">
            <span className={`${textColor}`}>{tempInFahrenheit}°F</span>
          </div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Other shit</div>
          <div className="stat-value overflow-x-auto text-secondary">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Wind Speed</th>
                  <th>Humidity</th>
                  <th>Cloud Percent</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
