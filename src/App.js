import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/addTodo';
import TodoList from './components/todoList';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todo from './components/Todo';
import OtherPage from './components/otherPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Todo} />
        <Route exact path="/otherpage" component={OtherPage} />
      </Router>
    
    </div>
  );
}

export default App;
