import Link from 'next/link';
import Button from '../ui/Button';

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
          placeholder="Todo title..."
          className="input w-full rounded-md border-[1px] border-slate-100 shadow-lg"
          id="title"
          name="title"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="Todo description..."
          className="input w-full rounded-md border-[1px] border-slate-100 shadow-lg"
          id="description"
          name="description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
      </label>
      <div className="mt-3 flex items-center justify-center gap-3">
        <Button type="button" id="tertiary">
          <Link href="/todos">Cancel</Link>
        </Button>
        <Button type="submit" id="primary">
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
