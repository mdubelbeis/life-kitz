import Button from '@/components/ui/Button';
import { SyntheticEvent, useState } from 'react';
interface CurrencyData {
  old_amount: number;
  old_currency: string;
  new_currency: string;
  new_amount: number;
}

const countryCodes = [
  { name: 'United States', code: 'USD' },
  { name: 'European Union', code: 'EUR' },
  { name: 'United Kingdom', code: 'GBP' },
  { name: 'Japan', code: 'JPY' },
  { name: 'China', code: 'CNY' },
  { name: 'Canada', code: 'CAD' },
  { name: 'Switzerland', code: 'CHF' },
  { name: 'Australia', code: 'AUD' },
  { name: 'Hong Kong', code: 'HKD' },
  { name: 'New Zealand', code: 'NZD' },
  { name: 'South Korea', code: 'KRW' },
  { name: 'Sweden', code: 'SEK' },
  { name: 'Singapore', code: 'SGD' },
  { name: 'Norway', code: 'NOK' },
  { name: 'Mexico', code: 'MXN' },
  { name: 'India', code: 'INR' },
  { name: 'Russia', code: 'RUB' },
  { name: 'South Africa', code: 'ZAR' },
  { name: 'Turkey', code: 'TRY' },
  { name: 'Brazil', code: 'BRL' },
  { name: 'Philippines', code: 'PHP' },
  { name: 'Indonesia', code: 'IDR' },
  { name: 'Thailand', code: 'THB' },
  { name: 'Afghanistan', code: 'AFN' },
  { name: 'Albania', code: 'ALL' },
  { name: 'Algeria', code: 'DZD' },
  { name: 'Angola', code: 'AOA' },
  { name: 'Argentina', code: 'ARS' },
  { name: 'Armenia', code: 'AMD' },
  { name: 'Azerbaijan', code: 'AZN' },
  { name: 'Bahrain', code: 'BHD' },
  { name: 'Bangladesh', code: 'BDT' },
  { name: 'Belarus', code: 'BYN' },
  { name: 'Belize', code: 'BZD' },
  { name: 'Bhutan', code: 'BTN' },
  { name: 'Bolivia', code: 'BOB' },
  { name: 'Bosnia and Herzegovina', code: 'BAM' },
  { name: 'Botswana', code: 'BWP' },
  { name: 'Brunei', code: 'BND' },
  { name: 'Bulgaria', code: 'BGN' },
  { name: 'Burkina Faso', code: 'XOF' },
  { name: 'Burundi', code: 'BIF' },
  { name: 'Cambodia', code: 'KHR' },
  { name: 'Cameroon', code: 'XAF' },
  { name: 'Cape Verde', code: 'CVE' },
  { name: 'Chile', code: 'CLP' },
  { name: 'Colombia', code: 'COP' },
  { name: 'Comoros', code: 'KMF' },
  { name: 'Costa Rica', code: 'CRC' },
  { name: 'Croatia', code: 'HRK' },
];

const CurrencyConverterWidget: React.FC = () => {
  const [currencyData, setCurrencyData] = useState<CurrencyData | null>(null);
  const [currentCurrency, setCurrentCurrency] = useState<string>(
    countryCodes[0].code
  );
  const [neededCurrency, setNeededCurrency] = useState<string>(
    countryCodes[0].code
  );
  const [currentAmount, setCurrentAmount] = useState<string>('');

  const currencyExchange = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(currentCurrency, neededCurrency);
    try {
      const currency_converter_widget_res = await fetch(
        `https://api.api-ninjas.com/v1/convertcurrency?have=${currentCurrency}&want=${neededCurrency}&amount=${currentAmount}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
          },
        }
      );
      const data = await currency_converter_widget_res.json();
      const { old_amount, old_currency, new_currency, new_amount } = data;

      // Convert new_amount to monetary format
      const new_amount_monetary = new_amount.toLocaleString('en-US', {
        style: 'currency',
        currency: new_currency,
      });

      setCurrencyData({
        old_amount: old_amount,
        old_currency: old_currency,
        new_currency: new_currency,
        new_amount: new_amount_monetary,
      });
    } catch (error) {
      console.log(`${error} - Currency Data Fetch Failed`);
    }
  };

  return (
    <>
      {currencyData ? (
        <div className="relative m-4 mx-auto flex max-w-2xl flex-col items-center justify-center rounded-xl bg-white p-3 py-24 shadow-lg lg:w-[500px] lg:py-72">
          <div className=" flex flex-col items-center gap-3 border border-black p-3 text-xl">
            <button
              type="button"
              className="absolute left-3 top-3 bg-transparent text-xl font-bold text-black hover:cursor-pointer hover:bg-transparent hover:text-logo active:text-quaternary"
              onClick={() => {
                setCurrencyData(null);
                // Remove from state
                setCurrentAmount('');
                setCurrentCurrency(countryCodes[0].code);
                setNeededCurrency(countryCodes[0].code);
              }}
            >
              X
            </button>
            <div className="flex flex-col gap-1">
              <span className="text-2xl font-bold">
                ${currencyData.old_amount} ({currencyData.old_currency}) -{' '}
                {currencyData.new_amount} ({currencyData.new_currency})
              </span>
            </div>
          </div>
          <small className="absolute bottom-2 left-2 text-red-700">
            Cannot gaurantee prices as the API may be a few hours behind
          </small>
        </div>
      ) : (
        <div className="m-4 mx-auto w-full max-w-2xl rounded-xl bg-white px-3 py-24 shadow-lg lg:w-[500px]">
          <h1 className="mb-6 text-center font-cedarville text-6xl">
            ExChange
          </h1>
          <div className=" flex w-full flex-col place-items-center items-center justify-center p-0">
            <form
              className="form-control flex w-full flex-col items-center justify-center gap-6 lg:w-10/12"
              onSubmit={currencyExchange}
            >
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Exchange to:</span>
                </label>
                <select
                  className="select-bordered select"
                  onChange={(e) => setNeededCurrency(e.target.value)}
                >
                  <option
                    value="default"
                    defaultValue={'Select a currency to exchange to'}
                  >
                    Select a currency to exchange to
                  </option>
                  {countryCodes.map((currency) => (
                    <option
                      key={currency.code}
                      value={currency.code}
                      id="neededCurrency"
                    >
                      {currency.name} - {currency.code}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Current Currency:</span>
                </label>
                <select
                  className="select-bordered select"
                  onChange={(e) => setCurrentCurrency(e.target.value)}
                >
                  <option
                    value="default"
                    defaultValue={'Select a currency to exchange from'}
                  >
                    Select a currency to exchange from
                  </option>
                  {countryCodes.map((currency) => (
                    <option
                      key={currency.code}
                      value={currency.code}
                      id="currentCurrency"
                    >
                      {currency.name} - {currency.code}
                    </option>
                  ))}
                </select>
                <div className="form-control my-10 w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Exchange Amount?</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Amount"
                    className="input-bordered input w-full max-w-xs"
                    onChange={(e) => setCurrentAmount(e.target.value)}
                  />
                </div>
              </div>
              {currentAmount && currentCurrency && neededCurrency ? (
                <Button id="primary" type="submit">
                  Exchange
                </Button>
              ) : (
                <Button
                  id="primary"
                  className="cursor-not-allowed bg-gray-400 text-black focus:outline-none disabled:opacity-75"
                  type="submit"
                >
                  Exchange
                </Button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CurrencyConverterWidget;
