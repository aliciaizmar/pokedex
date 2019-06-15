import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Card(props) {
  const { pokemonData } = props;

  return (
    <Fragment>
      <ul className='list__data'>
        {pokemonData.map(pokemon => {
          return (
            <li className='list__li' key={pokemon.id} id={pokemon.id}>
              <div className='list__up'>
                <img
                  className='list__img'
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                />
                <span className='list__id'>ID / {pokemon.id} </span>
              </div>
              <div className='list__down'>
                <h2 className='list__title'>{pokemon.name}</h2>
                <ul className='list__types'>
                  {pokemon.types.map((item, ind) => {
                    return (
                      <li className='list__types-name' key={ind}>
                        {item.type.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

Card.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default Card;
