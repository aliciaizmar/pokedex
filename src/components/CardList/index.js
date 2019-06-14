import React from 'react';
import PropTypes from 'prop-types';
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

CardList.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default CardList;
