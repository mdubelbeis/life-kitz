import { useState } from 'react';
import JokeWrapper from './JokeWrapper';
import { JokeData } from '@/pages';

interface JokesWidgetProps {
  joke: JokeData;
}

const JokesWidget: React.FC<JokesWidgetProps> = ({ joke }) => {
  const [showAnswer, setShowAnswer] = useState(false);


  return (
    <aside className="text-center" onClick={() => setShowAnswer(!showAnswer)}>
      {/* needs same styling! */}
      {!showAnswer ? (
        <JokeWrapper>{joke.line}</JokeWrapper>
      ) : (
        <JokeWrapper>{joke.answer}</JokeWrapper>
      )}
    </aside>
  );
};

export default JokesWidget;
