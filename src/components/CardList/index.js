import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from '../Card';

function CardList(props) {
  const { pokemonData } = props;
  return (
    <ul className='list__data'>
      {pokemonData.map(pokemon => {
        return (
          <li className='list__li' key={pokemon.id} id={pokemon.id}>
            <Card
              pokemonData={pokemonData}
              name={pokemon.name}
              types={pokemon.types}
              url={pokemon.sprites.front_default}
              id={pokemon.id}
            />
          </li>
        );
      })}
    </ul>
  );
}

CardList.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default CardList;
