import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

function CardDetail(props) {
  const { match, pokemonData } = props;
  const { id } = match.params;
  const myPokemon = pokemonData[id];
  return (
    <ul>
      {myPokemon ? (
        <Fragment key={myPokemon.id}>
          <li className='varios' id={myPokemon.id}>
            Altura: 0.{myPokemon.height} m Peso: {myPokemon.weight / 10} kg
            Habilidades:{' '}
            {myPokemon.abilities.map(item => {
              return item.ability.name;
            })}
          </li>
        </Fragment>
      ) : (
        'No existe'
      )}
    </ul>
  );
}

// CardDetail.propTypes = {
//   pokemonData: PropTypes.array.isRequired
// };

export default CardDetail;
