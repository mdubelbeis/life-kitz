import React from 'react';

interface WeatherWrapperProps {
  children: React.ReactNode;
}

const WeatherWrapper: React.FC<WeatherWrapperProps> = ({ children }) => {
  return <section className="mx-auto w-full">{children}</section>;
};

export default WeatherWrapper;
