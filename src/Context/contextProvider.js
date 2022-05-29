import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import context from './context';
import fectchPlanets from '../server';

function ContextProvider({ children }) {
  const inicialColumn = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const inicialComparison = ['maior que', 'menor que', 'igual a'];
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filters, setfilters] = useState([]);
  const [column, setColumn] = useState(inicialColumn);
  const [comparison, setComparison] = useState(inicialComparison);
  const inicialFilterArray = { column: column[0], comparison: comparison[0], value: 0 };
  const [filterByNumericValue, setfilterByNumericValue] = useState(inicialFilterArray);
  const [filterSort, setFilterSort] = useState({ order: 'population', sort: 'ASC' });

  const getPlanets = async () => {
    const planetas = await fectchPlanets();
    setData(planetas);
    setPlanets(planetas.results.sort((a, b) => a.name.localeCompare(b.name)));
  };

  useEffect(() => {
    getPlanets();
  }, []);

  function FilterByName({ target }) {
    setName(target.value);
    const planetsFilter = data.results.filter((e) => e.name.includes(target.value));
    setPlanets(planetsFilter);
  }

  function filterNumeric() {
    if (!data.results) return;
    let resetPlanets = [...data.results];
    setPlanets(data.results);
    filters.forEach((filtro) => {
      if (filtro.comparison === 'maior que') {
        resetPlanets = resetPlanets
          .filter((e) => Number(filtro.value) < Number(e[filtro.column]));
        setPlanets(resetPlanets);
      } else if (filtro.comparison === 'menor que') {
        resetPlanets = resetPlanets
          .filter((e) => Number(filtro.value) > Number(e[filtro.column]));
        setPlanets(resetPlanets);
      } else {
        setPlanets(data.results);
        resetPlanets = resetPlanets
          .filter((e) => Number(filtro.value) === Number(e[filtro.column]));
        setPlanets(resetPlanets);
      }
    });
  }
  function revomeFilter(filtername) {
    if (filtername === 'limpaFiltro') {
      setfilters([]);
    } else {
      const filtersRest = filters.filter((e) => e.column !== filtername.column);
      setColumn([...column, filtername.column]);
      setComparison([...comparison, filtername.comparison]);
      setfilters(filtersRest);
    }
  }
  function inicialFilter() {
    setfilterByNumericValue({ column: column[0], comparison: comparison[0], value: 0 });
  }

  useEffect(() => {
    filterNumeric();
    inicialFilter();
  }, [filters]);

  const contextValue = {
    name,
    planets,
    setPlanets,
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
    revomeFilter,
    filterSort,
    setFilterSort,
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
