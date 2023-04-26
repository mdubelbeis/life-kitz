import Time from './Time';
const ClockWidget: React.FC = () => {
  return (
    <div className="mx-auto w-full items-center justify-center rounded-r-lg bg-black text-center shadow-lg lg:w-6/12">
      <Time />
    </div>
  );
};

export default ClockWidget;
