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
import Join from './pages/todo-list/join';

// youtube pages
import YoutubeHome from './pages/youtube/Home';
import Watch from './pages/youtube/Watch';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/about" element={<About/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/explore" element={<Explore/>} />

        {/* todo-list */}
        <Route path="/todolist" element={<TodoListHome/>}/>
        <Route path="/todolist/team/join/:teamId" element={<Join/>} />

        {/* youtube */}
        <Route path="/youtube" element={<YoutubeHome />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
