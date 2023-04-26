import { Expense } from '@/pages';
import { useState } from 'react';
import Button from '../ui/Button';

interface ExpensesDisplayProps {
  expenses: Expense[];
}

const ExpensesDisplay: React.FC<ExpensesDisplayProps> = ({ expenses }) => {
  const [currentExpense, setCurrentExpense] = useState<number>();
  const [completedStyling, setCompletedStyling] = useState<string>('');

  const handlePaidExpense = async (id: number) => {
    setCurrentExpense(id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/expenses/${id.toString()}/`,
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
    }, 200);
  };

  const handleDeleteExpense = async (id: number) => {
    setCurrentExpense(id);
    const response = await fetch(
      `http://127.0.0.1:8000/api/expenses/${id.toString()}/`,
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
    }, 200);
  };
  return (
    <>
      {expenses?.length > 0 ? (
        <div className="overflow-x-auto shadow-lg">
          <table className="table-zebra table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses?.map((expense) => (
                <tr
                  key={expense.id}
                  className={`${
                    currentExpense === expense.id ? completedStyling : ''
                  }`}
                >
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td className="space-x-3">
                    <Button
                      id="primary"
                      type="button"
                      onClick={() => handlePaidExpense(expense.id)}
                    >
                      Paid
                    </Button>
                    <Button
                      id="tertiary"
                      type="button"
                      onClick={() => handleDeleteExpense(expense.id)}
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
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>No expenses found</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default ExpensesDisplay;
