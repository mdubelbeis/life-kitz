import ClockWidget from './ClockWidget/ClockWidget';
import CurrencyConverterWidget from './CurrencyConverter/CurrencyConverter';
import QuotesWidget from './QuotesWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const WidgetContainer: React.FC = () => {
  return (
    <section className="flex flex-col">
      <div className="flex h-full w-full flex-col gap-3 rounded-xl bg-white p-10 shadow-lg lg:flex-row">
        <WeatherWidget />
        <ClockWidget />
      </div>
      <div className="flex flex-wrap">
        <QuotesWidget />
        <CurrencyConverterWidget />
      </div>
    </section>
  );
};

export default WidgetContainer;
