import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Filter(props) {
  const { searchName, filterByName } = props;
  return (
    <Fragment>
      <form className='main__form'>
        <label htmlFor='name' className='hidden'>
          Filtrar por nombre
        </label>
        <input
          className='form__input'
          id='name'
          onChange={filterByName}
          value={searchName}
          placeholder='Filtrar por nombre'
        />
      </form>
    </Fragment>
  );
}

Filter.propTypes = {
  searchName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired
};

export default Filter;
