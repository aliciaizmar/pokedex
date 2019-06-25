import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';
import './styles.scss';
import CardDetailInfo from '../CardDetailInfo';
import CardDetailProfile from '../CardDetailProfile';

function CardDetail(props) {
  const { match } = props;

  return (
    <Fragment>
      <Link to='/' className='link'>
        <div className='back__link'>
          <span className='back__btn'>
            <TiChevronLeft className='icon' />
          </span>
        </div>
      </Link>

      {match ? (
        <Fragment key={match.id}>
          <div className='detail__content'>
            <div className='detail__main'>
              <CardDetailInfo
                src={match.sprites.front_default}
                alt={match.sprites.front_default}
                name={match.name}
                match={match}
              />

              <CardDetailProfile
                match={match}
                weight={match.weight}
                height={match.height}
              />

              <div className='detail__evolution'>
                <span className='detail__profile-title'>Evolución</span>
                <div className='detail__profile-item'>
                  <span className='detail__profile-name'>
                    {!match.newDataSpec.pokeSpecie.evolves_from_species
                      ? ''
                      : `Evoluciona de: ${
                          match.newDataSpec.pokeSpecie.evolves_from_species.name
                        }`}
                  </span>

                  <div className='detail__evolution-current'>
                    <img
                      src={match.sprites.front_shiny}
                      alt={match.sprites.front_shiny}
                    />
                  </div>
                  <span className='detail__profile-name'>
                    {!match.newDataSpec.pokeSpecie.evolution_chain.chain
                      .evolves_to
                      ? ''
                      : match.newDataSpec.pokeSpecie.evolution_chain.chain.evolves_to.map(
                          item => {
                            if (match.name === item.species.name) {
                              return item.evolves_to.map(itemEvol => {
                                return itemEvol === 0
                                  ? ''
                                  : `Evoluciona a: ${itemEvol.species.name}`;
                              });
                            } else {
                              if (
                                !match.newDataSpec.pokeSpecie
                                  .evolves_from_species
                              ) {
                                return `Evoluciona a: ${item.species.name}`;
                              } else if (
                                match.newDataSpec.pokeSpecie
                                  .evolves_from_species.name ===
                                item.species.name
                              ) {
                                return '';
                              }
                            }
                          }
                        )}
                  </span>
                </div>
              </div>
              <div className='detail__photos'>
                <span className='detail__profile-title'>Fotos</span>
                <ul className='detail__photos-list'>
                  <li>
                    <img
                      src={match.sprites.front_shiny}
                      alt={match.sprites.front_shiny}
                    />
                  </li>
                  <li>
                    <img
                      src={match.sprites.back_shiny}
                      alt={match.sprites.back_shiny}
                    />
                  </li>
                  <li>
                    <img
                      src={match.sprites.front_default}
                      alt={match.sprites.front_default}
                    />
                  </li>
                  <li>
                    <img
                      src={match.sprites.back_default}
                      alt={match.sprites.back_default}
                    />
                  </li>
                </ul>
              </div>
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
