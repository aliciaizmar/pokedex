import React from 'react';
import './styles.scss';

function CardDetailInfo(props) {
    
  const { match, src, alt, name } = props;
  return (
    <div className='detail__pokemon-info'>
      <div className='detail__pokemon'>
        <img src={src} alt={alt} />
        <h3 className='detail__profile-list--name'>{name}</h3>
      </div>
      <div className='detail__profile-stats'>
        <ul className='detail__profile-stats-list'>
          {match.stats.map((item, ind) => {
            return (
              <li key={ind}>
                <span>{item.stat.name}</span>
                <span className='detail__profile-stats--number'>
                  <span style={{ width: `${item.base_stat}%` }}>
                    {item.base_stat}
                  </span>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CardDetailInfo;
