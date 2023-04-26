import Calendar from './Calendar';
import Time from './Time';
const ClockWidget: React.FC = () => {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center text-center text-2xl">
      <Time />
      <Calendar />
    </div>
  );
};

export default ClockWidget;
