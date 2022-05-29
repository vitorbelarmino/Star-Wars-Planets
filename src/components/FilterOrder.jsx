import React, { useContext } from 'react';
import context from '../Context/context';

function FilterOrder() {
  const { setFilterSort, filterSort, planets, setPlanets } = useContext(context);
  const selectOrder = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  function handleChange({ target }) {
    const { name, value } = target;
    setFilterSort({ ...filterSort, [name]: value });
  }

  function putOrder() {
    const { order, sort } = filterSort;
    const magicNumber = -1;
    const unknownElements = planets.filter((e) => e[order] === 'unknown');
    const knowsElements = planets.filter((e) => e[order] !== 'unknown');
    if (sort === 'ASC') {
      knowsElements.sort((a, b) => (Number(a[order]) - Number(b[order])));
    } else {
      knowsElements.sort((a, b) => {
        if (Number(a[order]) > Number(b[order])) {
          return magicNumber;
        }
        if (Number(a[order]) < Number(b[order])) {
          return 1;
        }
        return 0;
      });
    }
    setPlanets([...knowsElements, ...unknownElements]);
  }

  return (
    <section>
      <label htmlFor="column-order">
        <select data-testid="column-sort" name="order" onClick={ handleChange }>
          {selectOrder.map((e, index) => (
            <option value={ e } key={ index }>{e}</option>
          ))}
        </select>
      </label>
      <label htmlFor="ascendente">
        Ascendente:
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASC"
          onClick={ handleChange }
        />
      </label>
      <label htmlFor="descendente">
        Descendente:
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESC"
          onClick={ handleChange }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ putOrder }
      >
        Ordenar

      </button>
    </section>

  );
}

export default FilterOrder;
