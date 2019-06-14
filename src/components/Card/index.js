import React, {Fragment} from 'react';
import './styles.scss';

function Card(props) {
  const { pokemonData } = props;
  return (
    <Fragment>
      <ul className='list__data'>
        {pokemonData.map((pokemon, id) => {
          return <li className='list__li' key={id}>{pokemon.name}</li>;
        })}
      </ul>
    </Fragment>
  );
}

export default Card;
