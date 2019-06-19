import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Card(props) {
  const { name, types, url, id, evolution } = props;
  //console.log('Card: ', pokemonEvol);

  return (
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
        <p className='list__evolution'>
          {!evolution.evolves_from_species
            ? ''
            : 'Evoluciona de: ' + evolution.evolves_from_species.name}
        </p>
      </div>
    </Fragment>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired
};

export default Card;
