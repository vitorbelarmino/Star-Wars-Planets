import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './Context/contextProvider';
import FilterNumeric from './components/FilterNumeric';

function App() {
  return (
    <ContextProvider>
      <h1>Star Wars Planets</h1>
      <FilterNumeric />
      <Table />
    </ContextProvider>
  );
}

export default App;
