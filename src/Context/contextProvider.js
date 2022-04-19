import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import context from './context';
import fectchPlanets from '../server';

function ContextProvider({ children }) {
  const [data, setData] = useState('');
  const getPlanets = async () => {
    const planets = await fectchPlanets();
    setData(planets);
  };
  useEffect(() => {
    getPlanets();
  }, []);
  return (
    <context.Provider value={ { data, setData } }>
      {children}
    </context.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.any,
}.isrequered;

export default ContextProvider;
