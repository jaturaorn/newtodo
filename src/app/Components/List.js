const List = ({TODO}) => {
  return <div>
{TODO.text}
    {/* {todos.map((todo, i) => (
          <li key={i} style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.text}
            <button onClick={() => toggleDone(i)}>✓</button>
            <button onClick={() => deleteTodo(i)}>🗑️</button>
          </li>
        ))} */}
  </div>;
};

export default List;
