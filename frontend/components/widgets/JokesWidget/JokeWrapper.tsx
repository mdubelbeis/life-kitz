import React from 'react';

interface JokeWrapperProps {
  children: React.ReactNode;
}

const JokeWrapper: React.FC<JokeWrapperProps> = ({ children }) => {
  return (
    <div className="w-full rounded-xl bg-slate-800 p-10 text-center text-slate-300">
      {children}
    </div>
  );
};

export default JokeWrapper;
