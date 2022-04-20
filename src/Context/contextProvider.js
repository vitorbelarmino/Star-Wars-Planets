import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import context from './context';
import fectchPlanets from '../server';

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setfilters] = useState([]);
  const [column, setColumn] = useState(['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [comparison, setComparison] = useState(['maior que', 'menor que', 'igual a']);
  const [filterByNumericValue, setfilterByNumericValue] = useState({
    column: 'population', comparison: 'maior que', value: 0 });

  const getPlanets = async () => {
    const planetas = await fectchPlanets();
    setData(planetas);
  };

  useEffect(() => {
    setPlanets(data.results);
  }, [data]);

  useEffect(() => {
    getPlanets();
  }, []);

  function FilterByName({ target }) {
    setName(target.value);
    const planetsFilter = data.results.filter((e) => e.name.includes(target.value));
    setPlanets(planetsFilter);
  }

  function filterNumeric() {
    filters.forEach((filtro) => {
      if (filtro.comparison === 'maior que') {
        const Planetsfilter = planets
          .filter((e) => Number(filtro.value) < Number(e[filtro.column]));
        setPlanets(Planetsfilter);
      } else if (filtro.comparison === 'menor que') {
        const Planetsfilter = planets
          .filter((e) => Number(filtro.value) > Number(e[filtro.column]));
        setPlanets(Planetsfilter);
      } else {
        const Planetsfilter = planets
          .filter((e) => Number(filtro.value) === Number(e[filtro.column]));
        setPlanets(Planetsfilter);
      }
    });
  }

  useEffect(() => {
    filterNumeric();
  }, [filters]);

  const contextValue = {
    name,
    planets,
    FilterByName,
    filterByNumericValue,
    setfilterByNumericValue,
    filterNumeric,
    filters,
    setfilters,
    column,
    setColumn,
    comparison,
    setComparison,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any,
}.isrequered;

export default ContextProvider;
