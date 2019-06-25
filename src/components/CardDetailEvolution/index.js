import React from 'react';
import './styles.scss';

function CardDetailEvolution(props) {
  const { match } = props;
  const evolutionFrom = match.newDataSpec.pokeSpecie.evolves_from_species;
  const evolutionTo = match.newDataSpec.pokeSpecie.evolution_chain.chain.evolves_to;

  return (
    <div className='detail__evolution'>
      <span className='detail__profile-title'>Evolución</span>

      <div className='detail__profile-item'>
        <span className='detail__profile-name'>
          {!evolutionFrom ? '' : `Evoluciona de: ${evolutionFrom.name}`}
        </span>

        <div className='detail__evolution-current'>
          <img
            src={match.sprites.front_shiny}
            alt={match.sprites.front_shiny}
          />
        </div>
        <span className='detail__profile-name'>
          {!evolutionTo
            ? ''
            : evolutionTo
            .map(item => {
                if (match.name === item.species.name) {
                  return item.evolves_to
                  .map(itemEvol => {
                    return itemEvol === 0
                      ? ''
                      : `Evoluciona a: ${itemEvol.species.name}`;
                  });
                } else {
                  if (!evolutionFrom) {
                    return `Evoluciona a: ${item.species.name}`;
                  } else if (evolutionFrom.name === item.species.name) {
                    return '';
                  }
                }
              })}
        </span>
      </div>
    </div>
  );
}
export default CardDetailEvolution;
