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
    <div className="relative m-4 mx-auto flex h-full w-full flex-col items-center justify-center gap-10 place-self-center rounded-md rounded-r-lg bg-black p-3 px-6 py-24 text-center font-digital text-xl text-green-700 shadow-lg sm:text-2xl md:text-3xl lg:w-[500px] lg:py-24 lg:text-6xl">
      <p className="text-4xl md:text-5xl lg:text-7xl">
        {times ? (
          times.replace('M', '')
        ) : (
          <span className="text-2xl lg:text-4xl">Loading...</span>
        )}
      </p>
      <p>
        <RiRadioButtonLine className="absolute left-2 top-2 animate-pulse text-red-500 lg:text-3xl" />
      </p>
      <p>
        <Calendar />
      </p>
    </div>
  );
};

export default Time;
