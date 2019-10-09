import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header';
import Footer from './Components/Footer';
import AllTodos from './Components/AllTodos';
import AddTodo from './Components/AddTodo';
//import sampleTodos from './sampleTodos.json';

const TODOSURL = `http://localhost:4000/todos`;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [onlineStatus, setOnlineStatus] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getTodos();
    }, 5000);
  }, []);

  const getTodos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(TODOSURL);
      const todos = await res.data;
      setTodos(todos);
      setLoading(false);
      setOnlineStatus(true);
    }
    catch (e) {
      setTodos(e.message);
      setLoading(false);
      setOnlineStatus(false);
    }
  };

  const submitTodo = todo => {
    const updatedTodos = [...todos, todo];
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <Header />
      <div className="container">
      {!onlineStatus && !loading ? (
        <h3>The data server may be offline, changes will not be saved</h3>
      ) : null}
        <AllTodos allTodos={todos} loading={loading} />
        <AddTodo submitTodo={submitTodo} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
