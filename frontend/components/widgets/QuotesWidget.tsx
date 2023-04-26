import { QuoteData } from '@/pages';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const QuotesWidget: React.FC = () => {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  const fetchQuoteData = async () => {
    try {
      const quotes_widget_res = await fetch(
        `https://api.api-ninjas.com/v1/quotes?limit=1`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
          },
        }
      );
      const data = await quotes_widget_res.json();

      let quotesWidgetDataLine: string;
      let quotesWidgetDataAuthor: string;
      let quotesWidgetDataCategory: string;

      quotesWidgetDataLine = data[0].quote;
      quotesWidgetDataAuthor = data[0].author;
      quotesWidgetDataCategory = data[0].category;

      setQuoteData({
        line: quotesWidgetDataLine,
        author: quotesWidgetDataAuthor,
        category: quotesWidgetDataCategory,
      });
    } catch (error) {
      console.log(`${error} - Quotes Data Fetch Failed`);
    }
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  return (
    <>
      {quoteData ? (
        <div className="relative m-4 mx-auto max-w-2xl rounded-xl p-3 py-24 shadow-lg bg-white">
          <Image
            src="/quotation.png"
            alt="quotation marks"
            width={200}
            height={200}
            className="absolute -left-10 top-0 opacity-10 lg:-left-20"
          />
          <div className="flex flex-col gap-3 p-3 text-xl">
            <p>{quoteData.line}</p>
            <p className="mt-3 text-center font-cedarville text-2xl">
              {quoteData.author}
            </p>
          </div>
          <Image
            src="/quotation.png"
            alt="quotation marks"
            className="absolute -right-3 bottom-0 mx-auto rotate-180 opacity-10 lg:-right-10"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className="relative m-4 mx-auto max-w-2xl rounded-xl p-3 py-24 shadow-lg">
          <Image
            src="/quotation.png"
            alt="quotation marks"
            width={200}
            height={200}
            className="absolute -left-10 top-0 opacity-10 lg:-left-20"
          />
          <p className="m-10 text-2xl">Quote Data Loading...</p>
          <Image
            src="/quotation.png"
            alt="quotation marks"
            className="absolute -right-3 bottom-0 mx-auto rotate-180 opacity-10 lg:-right-10"
            width={200}
            height={200}
          />
        </div>
      )}
    </>
  );
};

export default QuotesWidget;
