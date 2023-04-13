import React from "react";

interface WeatherWidgetProps {
  data: {};
}

const WeatherWidget: React.FC<WeatherWidgetProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>Weather</h2>
      <p>Weather data goes here</p>
    </div>
  );
};

export default WeatherWidget;
