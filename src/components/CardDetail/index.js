import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import './styles.scss';

function CardDetail(props) {
  const { match } = props;

  return (
    <Fragment>
      <Link to='/'>
        <div className='back__link'>
          <span>
            <FaAngleLeft className='icon' /> Back to Characters
          </span>
        </div>
      </Link>

      {match ? (
        <Fragment key={match.id}>
          <div className='detail__main'>
            <div className='detail__profile'>
              <span className='detail__profile-title'>Características</span>
              <ul className='detail__profile-list'>
                <li>{match.name}</li>
                <li>
                  <strong>Altura:</strong> 0.{match.height}m
                </li>
                <li>
                  <strong>Peso:</strong> {match.weight / 10}kg
                </li>
                <li>
                  <strong>Habilidades:</strong>
                  {match.abilities.map((item, ind) => {
                    return (
                      <span className='detail__profile-list--ability' key={ind}>
                        {item.ability.name}
                      </span>
                    );
                  })}
                </li>
              </ul>
            </div>
            <div className='detail__evolution'>
              <span className='detail__profile-title'>Evolución</span>
              <span>
                {!match.newDataSpec.pokeSpecie.evolves_from_species
                  ? ''
                  : `Evoluciona de: ${
                      match.newDataSpec.pokeSpecie.evolves_from_species.name
                    }`}
              </span>

              <span>
                {!match.newDataSpec.pokeSpecie.evolution_chain.chain.evolves_to
                  ? ''
                  : match.newDataSpec.pokeSpecie.evolution_chain.chain.evolves_to.map(
                      item => {
                        if (match.name === item.species.name) {
                          return ` Evoluciona a bis: ${item.evolves_to.map(
                            itemEvol => {
                              return itemEvol.species.name;
                            }
                          )}`;
                        } else {
                          if (
                            !match.newDataSpec.pokeSpecie.evolves_from_species
                          ) {
                            return `Evoluciona all: ${item.species.name}`;
                          } else if (
                            match.newDataSpec.pokeSpecie.evolves_from_species
                              .name === item.species.name
                          ) {
                            return '';
                          }
                        }
                      }
                    )}
              </span>
            </div>
          </div>
        </Fragment>
      ) : (
        <p className='nouser'>Ese pokemon no existe</p>
      )}
    </Fragment>
  );
}

export default CardDetail;
