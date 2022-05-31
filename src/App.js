import React from 'react';
import './App.scss';
import Table from './components/Table';
import ContextProvider from './Context/contextProvider';
import FilterNumeric from './components/FilterNumeric';
import FilterOrder from './components/FilterOrder';

function App() {
  return (
    <ContextProvider>
      <h1 className="app-title">Star Wars Planets</h1>
      <div className="filters">
        <FilterNumeric />
        <FilterOrder />
      </div>
      <Table />
    </ContextProvider>
  );
}

export default App;
