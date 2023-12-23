import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import "./App.css"

// pages

// omniplex pages
import Home from './pages/Home';
import Sign from './pages/Sign';
import Explore from './pages/Explore';
import About from './pages/About';
import Account from './pages/Account';

// todo-list pages
import TodoListHome from './pages/todo-list/Home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/about" element={<About/>} />
        <Route path="/account" element={<Account />} />
        <Route path="explore" element={<Explore/>} />

        {/* todo-list */}
        <Route path="todolist" element={<TodoListHome/>}/>
      </Routes>
    </Router>
  );
}

export default App;
