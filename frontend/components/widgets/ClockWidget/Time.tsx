import { useEffect, useState } from 'react';
import { RiRadioButtonLine } from 'react-icons/ri';
import Calendar from './Calendar';

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

  return (
    <div className="relative h-full w-full rounded-md bg-black px-6 py-24 font-digital text-xl text-green-700 sm:text-2xl md:text-3xl lg:text-6xl shadow-lg">
      <p className="absolute left-[50%] top-[50%] w-full -translate-x-[50%] -translate-y-[50%] text-4xl md:text-5xl lg:text-6xl">
        {times ? times.replace('M', '') : 'Loading...'}
      </p>
      <p>
        <RiRadioButtonLine className="absolute animate-pulse text-red-500 top-2 left-2 lg:text-3xl" />
      </p>
      <p className="absolute bottom-2 right-2 lg:text-5xl">
        <Calendar />
      </p>
    </div>
  );
};

export default Time;
