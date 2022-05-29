import React from 'react';
import './App.css';
import Table from './components/Table';
import ContextProvider from './Context/contextProvider';
import FilterNumeric from './components/FilterNumeric';
import FilterOrder from './components/FilterOrder';

function App() {
  return (
    <ContextProvider>
      <h1>Star Wars Planets</h1>
      <FilterNumeric />
      <FilterOrder />
      <Table />
    </ContextProvider>
  );
}

export default App;
