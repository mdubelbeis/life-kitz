import { useState } from 'react';
import JokeWrapper from './JokeWrapper';

interface JokesWidgetProps {
  joke: string;
}

const JokesWidget: React.FC<JokesWidgetProps> = ({ joke }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [question, answer] = joke.split('? ');

  return (
    <aside className="text-center" onClick={() => setShowAnswer(!showAnswer)}>
      {/* needs same styling! */}
      {!showAnswer ? (
        <JokeWrapper>{question}?</JokeWrapper>
      ) : (
        <JokeWrapper>{answer}</JokeWrapper>
      )}
    </aside>
  );
};

export default JokesWidget;
