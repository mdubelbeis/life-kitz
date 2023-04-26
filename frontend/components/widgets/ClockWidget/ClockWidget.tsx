import Calendar from './Calendar';
import Time from './Time';
const ClockWidget: React.FC = () => {
  return (
    <div className="mx-auto flex w-6/12 flex-col items-center justify-center rounded-r-lg border-2 border-white text-center text-2xl shadow-lg md:text-4xl lg:text-6xl">
      <Time />
      <Calendar />
    </div>
  );
};

export default ClockWidget;
