import React, { useContext } from 'react';
import context from '../Context/context';

function FilterNumeric() {
  const {
    filterByNumericValue,
    setfilterByNumericValue, setfilters } = useContext(context);

  const opts = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const operators = ['maior que', 'menor que', 'igual a'];

  function handleChange({ target }) {
    const { name, value } = target;
    setfilterByNumericValue({ ...filterByNumericValue, [name]: value });
  }

  function creatFilters() {
    setfilters((preveState) => [...preveState, filterByNumericValue]);
  }

  return (
    <section className="section-filter">
      <label htmlFor="column">
        Coluna:
        <select
          name="column"
          data-testid="column-filter"
          onChange={ handleChange }
        >
          {opts.map((opt, key) => (
            <option
              name={ opt }
              key={ key }
              value={ opt }
            >
              {opt}

            </option>
          ))}
        </select>
      </label>

      <label htmlFor="operators">
        Operador:
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleChange }
        >
          {operators.map((operator, key) => (
            <option
              name={ operator }
              key={ key }
              value={ operator }
            >
              {operator}

            </option>
          ))}
        </select>

        <label htmlFor="numberFilter">
          <input
            type="number"
            name="value"
            data-testid="value-filter"
            onChange={ handleChange }
            value={ filterByNumericValue.value }
          />
        </label>
      </label>

      <button type="button" data-testid="button-filter" onClick={ creatFilters }>
        Filter
      </button>

    </section>
  );
}

export default FilterNumeric;