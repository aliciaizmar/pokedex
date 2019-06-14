import React from 'react';
import './styles.scss';
import Card from '../Card';

function CardList(props) {
  const { pokemonData } = props;
  return (
    <div>
      <Card pokemonData={pokemonData} />
    </div>
  );
}

export default CardList;
