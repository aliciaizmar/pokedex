import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from '../Card';

function CardList(props) {
  const { pokemonData } = props;
  return (
    <Fragment>
      <Card pokemonData={pokemonData} />
    </Fragment>
  );
}

CardList.propTypes = {
  pokemonData: PropTypes.array.isRequired
};

export default CardList;
