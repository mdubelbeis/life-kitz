import TodosDisplay from '@/components/todos/TodosDisplay';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Todo } from '../index';

const TodosPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');
  const [newTodoDescription, setNewTodoDescription] = useState<string>('');
  const router = useRouter();

  const getTodos = async () => {
    try {
      const todos_data = await fetch('http://localhost:8000/api/todos/');
      const todos_json = await todos_data.json();
      const todos = todos_json;

      if (todos) {
        setTodos(todos);
      } else {
        setTodos(null);
      }
    } catch (error) {
      console.log(error + 'Error fetching data from /api/todos/');
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    if (localStorage.getItem('token')) {
      setIsAuthenticated(true);
      getTodos();
    } else {
      router.push('/login');
    }
  }, []);

  const handleNewTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.getItem('token');

    const newTodo = {
      title: newTodoTitle,
      description: newTodoDescription,
    };

    try {
      const response = await fetch('http://localhost:8000/api/todos/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
        body: JSON.stringify(newTodo),
      });
      console.log(`Token DUDE ${localStorage.getItem('token')}`);
      const data = await response.json();
      console.log(data);

      await getTodos();
    } catch (error) {
      console.log(error + 'Error creating new todo');
    }

    setNewTodoTitle('');
    setNewTodoDescription('');
  };

  return (
    isAuthenticated && (
      <section className="mx-auto flex w-11/12 max-w-6xl flex-col gap-10">
        <form className="flex flex-col gap-3" onSubmit={handleNewTodo}>
          <label>
            <input
              type="text"
              placeholder="Todo Title..."
              className="input w-full rounded-md border-2 border-gray-300"
              id="title"
              name="title"
              value={newTodoTitle}
              onChange={(e) => setNewTodoTitle(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Type here"
              className="input w-full rounded-md border-2 border-gray-300"
              id="description"
              name="description"
              value={newTodoDescription}
              onChange={(e) => setNewTodoDescription(e.target.value)}
            />
          </label>
          <div className="flex gap-3">
            <button type="submit" className="btn-primary btn">
              Add Todo
            </button>
            <button className="btn-secondary btn">
              <Link href="/todos">Cancel</Link>
            </button>
          </div>
        </form>
        <div>
          <h1>Todos</h1>
        </div>
        <TodosDisplay todos={todos} />
      </section>
    )
  );
};

export default TodosPage;
