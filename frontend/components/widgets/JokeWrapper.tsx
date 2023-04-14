import React from 'react';

interface JokeWrapperProps {
  children: React.ReactNode;
}

const JokeWrapper: React.FC<JokeWrapperProps> = ({ children }) => {
  return (
    <div className="w-full rounded-xl bg-slate-800 text-slate-300 p-10 text-center">
      {children}
    </div>
  );
};

export default JokeWrapper;
