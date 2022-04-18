import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './Context/contextProvider';

function App() {
  return (
    <ContextProvider>
      <h1>Star Wars Planets</h1>
      <Table />
    </ContextProvider>

  );
}

export default App;
