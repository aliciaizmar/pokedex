import React from 'react';
import './styles.scss';

function CardDetailProfile(props) {
  const { match, weight, height } = props;

  return (
    <div className='detail__profile'>
      <span className='detail__profile-title'>Características</span>
      <div className='detail__profile-content'>
        <div className='detail__profile-main' />
        <ul className='detail__profile-list'>
          <li>
            <strong>Altura:</strong> 0.{height}m
          </li>
          <li>
            <strong>Peso:</strong> {weight / 10}kg
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
    </div>
  );
}
export default CardDetailProfile;
