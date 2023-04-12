import axios from "axios";
import Head from "next/head";

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

interface HomePageProps {
  message: string;
  todos: Todo[]; // TODO: Create Todo Interface
  notes: Note[]; // TODO: Create Note Interface
  expenses: Expense[]; // TODO: Create Expense Interface
}

const HomePage: React.FC<HomePageProps> = ({
  message,
  todos,
  notes,
  expenses,
}) => {
  return (
    <>
      <Head>
        <title>Life-Kitz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
              expenses.map((expense) => <li key={expense.id}>{expense.title}</li>)
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
      </main>
    </>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    // FETCH USER TODOS -> USER TODOS | EXPECT 200 OK
    const todos = await axios.get("http://127.0.0.1:8000/api/todos/");
    const notes = await axios.get("http://127.0.0.1:8000/api/notes/");
    const expenses = await axios.get("http://127.0.0.1:8000/api/expenses/");

    return {
      props: {
        message: "Home Page Props",
        todos: todos.data,
        notes: notes.data,
        expenses: expenses.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default HomePage;
