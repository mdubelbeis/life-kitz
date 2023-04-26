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
      {!quoteData && (
        <div className="flex h-32 items-center justify-center">
          <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
        </div>
      )}
      {quoteData && (
        <div className="relative mx-auto max-w-2xl py-20">
          <Image
            src="/quotation.png"
            alt="quotation marks"
            width={200}
            height={200}
            className="absolute -left-10 top-0 opacity-10 lg:-left-20"
          />
          <div className="flex flex-col gap-3 p-3 text-xl">
            <p>{quoteData.line}</p>
            <p className="font-cedarville text-2xl">{quoteData.author}</p>
          </div>
          <Image
            src="/quotation.png"
            alt="quotation marks"
            className="absolute mx-auto bottom-0 -right-3 rotate-180 opacity-10 lg:-right-10"
            width={200}
            height={200}
          />
        </div>
      )}
    </>
  );
};

export default QuotesWidget;
