import React from "react";

interface WeatherWidgetProps {
  data: { feels_like: number };
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  return (
    <div>
      <h2>Weather</h2>
      <p>{data.feels_like}</p>
    </div>
  );
};

export default WeatherWidget;
