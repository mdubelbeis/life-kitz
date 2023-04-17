import React from 'react';

interface WeatherWrapperProps {
  children: React.ReactNode;
}

const WeatherWrapper: React.FC<WeatherWrapperProps> = ({ children }) => {
  return <aside className="mx-auto w-full">{children}</aside>;
};

export default WeatherWrapper;
