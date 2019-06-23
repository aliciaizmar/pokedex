import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  TiArrowRightThick,
  TiChevronLeft,
  TiArrowLeftThick
} from 'react-icons/ti';
import './styles.scss';

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
              <div className='detail__pokemon-info'>
                <div className='detail__pokemon'>
                  <img
                    src={match.sprites.front_default}
                    alt={match.sprites.front_default}
                  />
                  <h3 className='detail__profile-list--name'>{match.name}</h3>
                </div>
                {/* <div>
                  {match.newDataSpec.pokeSpecie.flavor_text_entries
                    .map((item, ind) => {
                      return item.language.name === 'es' ? (
                        <p className='detail__profile-text' key={ind}>
                          {item.flavor_text}
                        </p>
                      ) : (
                        ''
                      );
                    })}
                </div> */}
              </div>
              <div className='detail__profile'>
                <span className='detail__profile-title'>Características</span>
                <div className='detail__profile-content'>
                  <div className='detail__profile-main' />
                  <ul className='detail__profile-list'>
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
                          <span
                            className='detail__profile-list--ability'
                            key={ind}
                          >
                            {item.ability.name}
                          </span>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
              <div className='detail__evolution'>
                <span className='detail__profile-title'>Evolución</span>
                <div className='detail__profile-item'>
                  <span className='detail__profile-name'>
                    {!match.newDataSpec.pokeSpecie.evolves_from_species
                      ? ''
                      : match.newDataSpec.pokeSpecie.evolves_from_species.name}
                  </span>

                  <div className='detail__evolution-current'>
                    <TiArrowLeftThick className='icon-arrow' />
                    <img
                      src={match.sprites.front_shiny}
                      alt={match.sprites.front_shiny}
                    />
                    <TiArrowRightThick className='icon-arrow' />
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
                                  : ` ${itemEvol.species.name}`;
                              });
                            } else {
                              if (
                                !match.newDataSpec.pokeSpecie
                                  .evolves_from_species
                              ) {
                                return ` ${item.species.name}`;
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
