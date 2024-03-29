function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    },
    {
      text: 'learn how to show work on local host',
      isCompleted: false,
    }        
  ])

  return(
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>{todo.text}</div>
      ))}
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
