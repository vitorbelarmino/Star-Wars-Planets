import React, { useContext } from 'react';
import context from '../Context/context';

function Table() {
  const { results } = useContext(context);

  return (
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
        {results && results.map((planet) => (
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
  );
}
export default Table;
