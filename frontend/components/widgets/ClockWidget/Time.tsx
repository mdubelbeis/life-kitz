import { useEffect, useState } from 'react';

const Time: React.FC = () => {
  const [times, setTimes] = useState<string>('');

  const getTimes = () => {
    setTimes(
      new Date().toLocaleTimeString().split(':').slice(0, 2).join(':') +
        ' ' +
        new Date().toLocaleTimeString().slice(-2)
    );
  };

  useEffect(() => {
    const interval = setInterval(() => getTimes(), 1000);
    return () => clearInterval(interval);
  });

  return <p>{times}</p>;
};

export default Time;
