import React from 'react';
import './styles.scss';

function CardDetailImg(props) {
  const { match } = props;

  return (
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
  );
}
export default CardDetailImg;
