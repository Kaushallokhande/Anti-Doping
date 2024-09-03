import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
    </div>
  );
}

export default App;
