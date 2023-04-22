import ClockWidget from '@/components/widgets/ClockWidget/ClockWidget';
import JokesWidget from '@/components/widgets/JokesWidget/JokesWidget';
import QuotesWidget from '@/components/widgets/QuotesWidget';
import WeatherWidget from '@/components/widgets/WeatherWidget/WeatherWidget';
import WidgetContainer from '@/components/widgets/WidgetContainer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface Todo {
  id: number;
  title: string;
  description: string;
  created_at: string;
  completed: boolean;
}

export interface Note {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export interface Expense {
  id: number;
  title: string;
  amount: number;
  description: string;
  created_at: string;
}

export interface WeatherData {
  wind_speed: number;
  wind_degrees: number;
  temp: number;
  humidity: number;
  sunset: number;
  min_temp: number;
  cloud_pct: number;
  feels_like: number;
  sunrise: number;
  max_temp: number;
}

export interface JokeData {
  line: string;
  answer: string;
}

export interface QuoteData {
  line: string;
  author: string;
  category: string;
}

const HomePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [todos, setTodos] = useState<Todo[]>([]);
  // const [notes, setNotes] = useState<Note[]>([]);
  // const [expenses, setExpenses] = useState<Expense[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
    } else {
      router.push('/login');
    }
  }, []);

  return (
    <>
      {isAuthenticated && (
        <>
          <Head>
            <title>Life-Kitz</title>
            <meta name="description" content="Generated by create next app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <WidgetContainer>
            <WeatherWidget />
            <ClockWidget />
            <JokesWidget />
            <QuotesWidget />
            {/* <NewsWidget /> */}
          </WidgetContainer>
        </>
      )}
    </>
  );
};

export default HomePage;
