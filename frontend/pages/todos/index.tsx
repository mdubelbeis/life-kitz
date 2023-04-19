import { useState } from 'react';
import { Todo } from '../index';

interface TodosPageProps {
  todosData: Todo[] | null;
}

const TodosPage: React.FC<TodosPageProps> = ({ todosData }) => {
  const [todos, setTodos] = useState<Todo[]>(todosData);
  return (
    <>
      <div>
        <h1>Todos</h1>
      </div>
      <div>
        {
          <ul>
            {todosData.map((todo) => (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </li>
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export async function getServerSideProps() {
  // let todos: Todo[];
  try {
    const todos_data = await fetch('http://localhost:8000/api/todos/');
    const todos_json = await todos_data.json();
    const todos = todos_json;
    console.log(todos);

    return {
      props: {
        todosData: todos,
      },
    };
  } catch (error) {
    console.log(error + 'Error fetching data from /api/todos/');
  }

  return {
    props: {
      todosData: null,
    },
  };
}

export default TodosPage;
