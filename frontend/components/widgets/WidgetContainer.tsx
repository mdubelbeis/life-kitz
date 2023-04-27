import ClockWidget from './ClockWidget/ClockWidget';
import CurrencyConverterWidget from './CurrencyConverter/CurrencyConverter';
import QuotesWidget from './QuotesWidget';
import WeatherWidget from './WeatherWidget/WeatherWidget';

const WidgetContainer: React.FC = () => {
  return (
    <section className="flex flex-col items-stretch justify-center md:flex-row md:flex-wrap">
      <ClockWidget />
      <WeatherWidget />
      <QuotesWidget />
      <CurrencyConverterWidget />
    </section>
  );
};

export default WidgetContainer;
