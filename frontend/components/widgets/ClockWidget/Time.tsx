import { useEffect, useState } from 'react';

const Time: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return <p className="">{time.slice(0, 5)}</p>;
};

export default Time;
