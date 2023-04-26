import Link from 'next/link';
import Button from '../ui/Button';

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
          className="input w-full rounded-md border-[1px] border-slate-100 shadow-lg"
          id="title"
          name="title"
          value={newExpenseTitle}
          onChange={(e) => setNewExpenseTitle(e.target.value)}
        />
      </label>
      <label>
        <input
          placeholder="Description"
          className="input w-full rounded-md border-[1px] border-slate-100 py-2 shadow-lg"
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
          className="input w-full rounded-md border-[1px] border-slate-100 py-2 shadow-lg"
          id="amount"
          name="amount"
          value={newExpenseAmount}
          onChange={(e) => setNewExpenseAmount(Number(e.target.value))}
        />
      </label>
      <div className="mt-3 flex items-center justify-center gap-3">
        <Button type="button" id="tertiary">
          <Link href="/">Cancel</Link>
        </Button>
        <Button type="submit" id="primary">
          Add Expense
        </Button>
      </div>
    </form>
  );
};

export default ExpenseForm;
