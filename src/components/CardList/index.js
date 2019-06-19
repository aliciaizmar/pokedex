import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from '../Card';

function CardList(props) {
  const { pokemonData } = props;

  return (
    <Fragment>
      {/* <p>Resultados: {pokemonData.length}</p> */}
      <ul className='list__data'>
        {pokemonData.length === 0 ? (
          <p className='nouser'>Ese pokemon no existe</p>
        ) : (
          pokemonData.map(pokemon => {
            return (
              <li className='list__li' key={pokemon.id} id={pokemon.id}>
                <Card
                  name={pokemon.name}
                  types={pokemon.types}
                  url={pokemon.sprites.front_default}
                  id={pokemon.id}
                  evolution={pokemon.newDataSpec.pokeSpecie}
                />
              </li>
            );
          })
        )}
      </ul>
    </Fragment>
  );
}

CardList.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default CardList;
