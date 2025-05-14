import Header from './Components/Header';
import React from 'react';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="background"/>
    </div>
  );
}

export default App