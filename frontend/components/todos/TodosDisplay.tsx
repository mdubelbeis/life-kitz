import { Todo } from '@/pages';
import React, { useEffect } from 'react';

interface TodosDisplayProps {
  todos: Todo[];
}

const TodosDisplay: React.FC<TodosDisplayProps> = ({ todos }) => {
  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      {todos ? (
        <div className="overflow-x-auto">
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
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td className="line-clamp-1">{todo.description}</td>
                  <td>
                    <button className="mr-2">Completed</button>
                    <button className="mr-2">Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No todos</p>
      )}
    </>
  );
};

export default TodosDisplay;
