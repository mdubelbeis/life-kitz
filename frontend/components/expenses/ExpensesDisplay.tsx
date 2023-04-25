import { Expense } from '@/pages';

interface ExpensesDisplayProps {
  expenses: Expense[];
}

const ExpensesDisplay: React.FC<ExpensesDisplayProps> = ({ expenses }) => {
  return (
    <>
      {expenses ? (
        <div className="overflow-x-auto">
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
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>${expense.amount}</td>
                  <td>
                    <button className="mr-2">Paid</button>
                    <button className="mr-2">Delete</button>
                    <button>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No expenses</p>
      )}
    </>
  );
};

export default ExpensesDisplay;
