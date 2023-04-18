const TodosPage: React.FC = () => {
  return <div>TodosPage</div>;
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
        todos: todos,
      },
    };
  } catch (error) {
    console.log(error + 'Error fetching data from /api/todos/');
  }

  return {
    props: {
      todos: [],
    },
  };
}

export default TodosPage;
