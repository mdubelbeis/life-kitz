import { Todo } from '@/pages';
import React from 'react';
import Button from '../ui/Button';

interface TodosDisplayProps {
  todos: Todo[];
}

const TodosDisplay: React.FC<TodosDisplayProps> = ({ todos }) => {
  const [currentTodo, setCurrentTodo] = React.useState<number>(0);
  const [completedStyling, setCompletedStyling] = React.useState<string>('');

  const handleCompleteTodo = async (todo: Todo) => {
    setCurrentTodo(todo.id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/todos/${todo.id}/`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      }
    );

    setCompletedStyling('text-green-500 line-through');

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleDeleteTodo = async (todo: Todo) => {
    setCurrentTodo(todo.id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/todos/${todo.id}/`,
      {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token').slice(1, -1)}`,
        },
      }
    );

    setCompletedStyling('text-red-500 line-through');

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      {todos?.length > 0 ? (
        <div className="overflow-x-auto shadow-lg">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Quick Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr
                  key={todo.id}
                  className={`${
                    currentTodo === todo.id ? completedStyling : ''
                  }`}
                >
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td className="space-x-3">
                    <Button
                      id="primary"
                      type="button"
                      onClick={() => handleCompleteTodo(todo)}
                    >
                      Completed
                    </Button>
                    <Button
                      id="tertiary"
                      type="button"
                      onClick={() => handleDeleteTodo(todo)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>No todos found</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default TodosDisplay;
