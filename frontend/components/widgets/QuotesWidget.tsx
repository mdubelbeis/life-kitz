import { QuoteData } from '@/pages';

interface QuotesWidgetProps {
  quote: QuoteData;
}
const QuotesWidget: React.FC<QuotesWidgetProps> = ({ quote }) => {
  return (
    <div>
      <p>{quote.line}</p>
      <p>{quote.author}</p>
      <p>{quote.category}</p>
    </div>
  );
};

export default QuotesWidget;
