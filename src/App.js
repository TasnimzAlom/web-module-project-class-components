import React from 'react';
import TodoList from "./components/TodoList"
import "./components/Todo.css"



class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1> Whatcha up to today?</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;