import { JokeData } from '@/pages';
import { useEffect, useState } from 'react';
import JokeWrapper from './JokeWrapper';

const JokesWidget: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [jokeData, setJokeData] = useState<JokeData | null>(null);

  const fetchJokeData = async () => {
    try {
      const jokes_widget_res = await fetch(
        'https://api.api-ninjas.com/v1/jokes?limit=1',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
          },
        }
      );
      const jokes_widget_data = await jokes_widget_res.json();

      let jokesWidgetData_line: string;
      let jokesWidgetData_answer: string;

      if (jokes_widget_data[0].joke.includes('?')) {
        const split = jokes_widget_data[0].joke.split('? ');
        jokesWidgetData_line = split[0] + '?';
        jokesWidgetData_answer = split[1];
      } else {
        jokesWidgetData_line = jokes_widget_data[0].joke;
        jokesWidgetData_answer = '';
      }

      setJokeData({
        line: jokesWidgetData_line,
        answer: jokesWidgetData_answer,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJokeData();
  }, []);

  return (
    <aside className="text-center" onClick={() => setShowAnswer(!showAnswer)}>
      {!jokeData && (
        <div className="flex h-32 items-center justify-center">
          <div className="loader mb-4 h-12 w-12 rounded-full border-4 border-t-4 border-gray-200 ease-linear"></div>
        </div>
      )}
      {jokeData && (
        <>
          {!showAnswer ? (
            <JokeWrapper>{jokeData.line}</JokeWrapper>
          ) : (
            <JokeWrapper>{jokeData.answer}</JokeWrapper>
          )}
        </>
      )}
    </aside>
  );
};

export default JokesWidget;
