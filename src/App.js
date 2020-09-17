import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/layouts/users/Users';

function App() {
  return (
    <div className="App">
      <Navbar title='Github Finder' icon='fab fa-github' />
      <div className='container'>
        <Users />
      </div>
    </div>
  );
}

export default App;
