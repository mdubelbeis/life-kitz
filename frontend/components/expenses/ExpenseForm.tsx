import Link from 'next/link';

interface ExpenseFormProps {
  newExpenseTitle: string;
  newExpenseDescription: string;
  newExpenseAmount: number | '';
  setNewExpenseTitle: React.Dispatch<React.SetStateAction<string>>;
  setNewExpenseDescription: React.Dispatch<React.SetStateAction<string>>;
  setNewExpenseAmount: React.Dispatch<React.SetStateAction<number>>;
  handleNewExpense: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  newExpenseTitle,
  newExpenseDescription,
  newExpenseAmount,
  setNewExpenseTitle,
  setNewExpenseDescription,
  setNewExpenseAmount,
  handleNewExpense,
}) => {
  return (
    <form
      onSubmit={handleNewExpense}
      className="mx-auto flex w-11/12 max-w-6xl flex-col justify-center gap-3"
    >
      <label>
        <input
          type="text"
          placeholder="Title"
          className="input w-full rounded-md border-2 border-gray-300"
          id="title"
          name="title"
          value={newExpenseTitle}
          onChange={(e) => setNewExpenseTitle(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Description"
          className="input w-full rounded-md border-2 border-gray-300 py-2"
          id="Description"
          name="Description"
          value={newExpenseDescription}
          onChange={(e) => setNewExpenseDescription(e.target.value)}
        />
      </label>
      <label>
        <input
          type="number"
          min="1"
          step="any"
          placeholder="Amount"
          className="input w-full rounded-md border-2 border-gray-300 py-2"
          id="amount"
          name="amount"
          value={newExpenseAmount}
          onChange={(e) => setNewExpenseAmount(Number(e.target.value))}
        />
      </label>
      <div className="flex items-center justify-center gap-3">
        <button type="submit" className="btn-primary btn">
          Add Note
        </button>
        <button className="btn-secondary btn">
          <Link href="/notes">Cancel</Link>
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
