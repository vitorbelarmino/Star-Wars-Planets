import React, { useContext, useState, useEffect } from 'react';
import context from '../Context/context';

function Table() {
  const { data } = useContext(context);
  const [planets, setPlanets] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setPlanets(data.results);
  }, [data]);

  function handleChange({ target }) {
    setName(target.value);
    const planetsFilter = data.results.filter((e) => e.name.includes(target.value));
    setPlanets(planetsFilter);
  }

  return (
    <>
      <label htmlFor="name">
        <input
          type="text"
          data-testid="name-filter"
          onChange={ handleChange }
          value={ name }
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Oribital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravite</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {planets && planets.map((planet) => (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{ planet.rotation_period }</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.map((film) => film)}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default Table;
