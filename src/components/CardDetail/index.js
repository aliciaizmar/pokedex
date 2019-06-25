import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { TiChevronLeft } from 'react-icons/ti';
import './styles.scss';
import CardDetailInfo from '../CardDetailInfo';
import CardDetailProfile from '../CardDetailProfile';
import CardDetailImg from '../CardDetailImg';
import CardDetailEvolution from '../CardDetailEvolution/index';

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

              <CardDetailEvolution match={match} />

              <CardDetailImg match={match} />
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
