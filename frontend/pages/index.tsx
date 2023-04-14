import JokesWidget from '@/components/widgets/JokesWidget';
import WeatherWidget from '@/components/widgets/WeatherWidget';
import WidgetContainer from '@/components/widgets/WidgetContainer';
import axios from 'axios';
import Head from 'next/head';

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

export interface HomePageProps {
  // message: string;
  todos: Todo[]; // TODO: Create Todo Interface
  notes: Note[]; // TODO: Create Note Interface
  expenses: Expense[]; // TODO: Create Expense Interface
  widgetData: { jokes: {}[] }[];
}

const HomePage: React.FC<HomePageProps> = ({
  todos,
  notes,
  expenses,
  widgetData,
}) => {
  const joke = widgetData.jokes[0].joke;
  return (
    <>
      <Head>
        <title>Life-Kitz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WidgetContainer>
        <WeatherWidget />
        {/* <ClockWidget /> */}
        <JokesWidget joke={joke} />
        {/* <QuotesWidget /> */}
        {/* <NewsWidget /> */}
      </WidgetContainer>
      <section>
        <h1>Life-Kitz</h1>
        <div>
          <p>Todos</p>
          <ul>
            {todos.length > 0 ? (
              todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
            ) : (
              <li>No todos</li>
            )}
          </ul>
        </div>
        <div>
          <p>Expenses</p>
          <ul>
            {expenses.length > 0 ? (
              expenses.map((expense) => (
                <li key={expense.id}>{expense.title}</li>
              ))
            ) : (
              <li>No expenses</li>
            )}
          </ul>
        </div>
        <div>
          <p>Notes</p>
          <ul>
            {notes.length > 0 ? (
              notes.map((note) => <li key={note.id}>{note.title}</li>)
            ) : (
              <li>No Notes</li>
            )}
          </ul>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps() {
  //* Fetch data from BE API
  let todos_data:
    | {
        id: number;
        title: string;
        description: string;
        created_at: string;
        completed: boolean;
      }[];
  let notes_data:
    | { id: number; title: string; content: string; created_at: string }[];
  let expenses_data:
    | {
        id: number;
        title: string;
        amount: number;
        description: string;
        created_at: string;
      }[];
  let jokesWidgetData: {}[];

  try {
    todos_data = await axios.get('http://127.0.0.1:8000/api/todos/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
    notes_data = await axios.get('http://127.0.0.1:8000/api/notes/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
    expenses_data = await axios.get('http://127.0.0.1:8000/api/expenses/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
  } catch {
    console.log('Error fetching data from BE API');
  }

  try {
    const jokes_widget_res = await fetch(
      `https://api.api-ninjas.com/v1/jokes?limit=1`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
        },
      }
    );
    const data = await jokes_widget_res.json();
    jokesWidgetData = data;
    console.log(jokesWidgetData);
  } catch (error) {
    console.log(`${error} - Weather Widget Data Fetch Failed`);
  }
  //* Fetch data from 3rd party APIs
  return {
    props: {
      todos: todos_data.data,
      notes: notes_data.data,
      expenses: expenses_data.data,
      widgetData: {
        jokes: jokesWidgetData,
        // quotes: quotesWidgetData,
        // news: newsWidgetData,
      },
    },
  };
}

export default HomePage;
