import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';  {/* this is react navigator hook */}


function App() {
    const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
<h1>Welcome</h1>
<button className='user-button' onClick={() => navigate('/users')}>Users</button>   {/* giving arguement to the path defined in the index.js */}
      </header>
    </div>
  );
}

export default App;
