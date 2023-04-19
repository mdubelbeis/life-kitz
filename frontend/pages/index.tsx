import ClockWidget from '@/components/widgets/ClockWidget/ClockWidget';
import WeatherWidget from '@/components/widgets/WeatherWidget/WeatherWidget';
import WidgetContainer from '@/components/widgets/WidgetContainer';
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

export interface JokeData {
  line: string;
  answer: string;
}

export interface QuoteData {
  line: string;
  author: string;
  category: string;
}

export interface HomePageProps {
  // message: string;
  todos: Todo[]; // TODO: Create Todo Interface
  notes: Note[]; // TODO: Create Note Interface
  expenses: Expense[]; // TODO: Create Expense Interface
  widgetData: { joke: JokeData; quote: QuoteData };
}

const HomePage: React.FC<HomePageProps> = ({
  todos,
  notes,
  expenses,
  widgetData,
}) => {
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
        <ClockWidget />
        {/* <JokesWidget joke={widgetData.joke} />
        <QuotesWidget quote={widgetData.quote} /> */}
        {/* <NewsWidget /> */}
      </WidgetContainer>
      {/* <section>
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
      </section> */}
    </>
  );
};

// export async function getServerSideProps() {
//   //* Fetch data from BE API
//   let todos_data: Todo[];
//   let notes_data: Note[];
//   let expenses_data: Expense[];

//   //* 3rd Party API data
//   let jokesWidgetData_line: string;
//   let jokesWidgetData_answer: string;
//   let quotesWidgetData_line: string;
//   let quotesWidgetData_author: string;
//   let quotesWidgetData_category: string;

//   // FETCH BE data
//   try {
//     todos_data = await axios.get('http://127.0.0.1:8000/api/todos/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
//     notes_data = await axios.get('http://127.0.0.1:8000/api/notes/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
//     expenses_data = await axios.get('http://127.0.0.1:8000/api/expenses/'); // TODO: ADD AUTH HEADERS - Once Auth on FE is setup
//   } catch {
//     console.log('Error fetching data from BE API');
//   }

//   // FETCH jokes data
//   try {
//     const jokes_widget_res = await fetch(
//       `https://api.api-ninjas.com/v1/jokes?limit=1`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
//         },
//       }
//     );
//     const data = await jokes_widget_res.json();
//     if (data[0].joke.includes('?')) {
//       const split = data[0].joke.split('? ');
//       jokesWidgetData_line = split[0] + '?';
//       jokesWidgetData_answer = split[1];
//     } else {
//       jokesWidgetData_line = data[0].joke;
//       jokesWidgetData_answer = '';
//     }

//     // quotesWidgetData_category = data[0].category;
//   } catch (error) {
//     console.log(`${error} - Jokes Widget Data Fetch Failed`);
//   }

//   // FETCH quotes data
//   try {
//     const quotes_widget_res = await fetch(
//       `https://api.api-ninjas.com/v1/quotes?limit=1`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
//         },
//       }
//     );
//     const data = await quotes_widget_res.json();
//     quotesWidgetData_line = data[0].quote;
//     quotesWidgetData_author = data[0].author;
//     quotesWidgetData_category = data[0].category;
//   } catch (error) {
//     console.log(`${error} - Quotes Data Fetch Failed`);
//   }

//   return {
//     props: {
//       todos: todos_data.data,
//       notes: notes_data.data,
//       expenses: expenses_data.data,
//       widgetData: {
//         joke: { line: jokesWidgetData_line, answer: jokesWidgetData_answer },
//         quote: {
//           line: quotesWidgetData_line || 'No Quote Found',
//           author: quotesWidgetData_author || 'No Author Found',
//           category: quotesWidgetData_category || 'No Category Found',
//         },
//         // news: newsWidgetData,
//       },
//     },
//   };
// }

export default HomePage;
