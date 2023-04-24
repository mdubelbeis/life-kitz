import Link from 'next/link';

interface TodoFormProps {
  newTodoTitle: string;
  newTodoDescription: string;
  setNewTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewTodoDescription: React.Dispatch<React.SetStateAction<string>>;
  handleNewTodo: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const TodoForm: React.FC<TodoFormProps> = ({
  handleNewTodo,
  newTodoTitle,
  setNewTodoTitle,
  newTodoDescription,
  setNewTodoDescription,
}) => {
  return (
    <form
      className="mx-auto flex w-11/12 max-w-6xl flex-col justify-center gap-3"
      onSubmit={handleNewTodo}
    >
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
      <div className="flex items-center justify-center gap-3">
        <button type="submit" className="btn-primary btn">
          Add Todo
        </button>
        <button className="btn-secondary btn">
          <Link href="/todos">Cancel</Link>
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
