import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Card(props) {
  const { name, types, url, id, evolution } = props;

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

        {!evolution.evolves_from_species ? (
          ''
        ) : (
          <p className='list__evolution'>
            Evoluciona de <span>{evolution.evolves_from_species.name}</span>
          </p>
        )}
      </div>
    </Fragment>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  types: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  evolution: PropTypes.object.isRequired
};

export default Card;
