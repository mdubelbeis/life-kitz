import { useState } from "react"

import { QuoteData } from "@/pages"

interface QuotesWidgetProps {
  quote: QuoteData;
}
const QuotesWidget: React.FC<QuotesWidgetProps> = ({ quote }) => {
  // const [quote, setQuote] = useState<string>(quotes[0])
  // const [quoteAuthor, setQuoteAuthor] = useState<string>('')
  console.log(quote)


  return (
    <div>
      <p>{quote.line}</p>
      <p>{quote.author}</p>
      <p>{quote.category}</p>
    </div>
  )
}


export default QuotesWidget;
