import ClockWidget from './ClockWidget/ClockWidget';
import QuotesWidget from './QuotesWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const WidgetContainer: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex w-full rounded-xl border-[1px] border-primary">
        <WeatherWidget />
        <ClockWidget />
      </div>
      {/* <JokesWidget /> */}
      <QuotesWidget />
    </section>
  );
};

export default WidgetContainer;
