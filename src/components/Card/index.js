import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Card(props) {
  const { pokemonData, name, types, url, id } = props;
  console.log('pokemonData', pokemonData);
  return (
    <Fragment>
      {pokemonData.length === 0 ? (
        <p className='nouser'>Ese pokemon no existe</p>
      ) : (
        <Fragment>
          <div className='list__up'>
            <img className='list__img' src={url} alt={name} />
            <span className='list__id'>ID / {id} </span>
          </div>
          <div className='list__down'>
            <h2 className='list__title'>{name}</h2>
            <ul className='list__types'>
              {types.map((item, ind) => {
                return (
                  <li className='list__types-name' key={ind}>
                    {item.type.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

Card.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default Card;
