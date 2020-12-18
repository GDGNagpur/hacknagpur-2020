import React from 'react';
import Cup from '../svgs/cup';
import PrizeModal from './PrizeModal';

const Prizes = () => {
  const [identifier, setIdentifier] = React.useState('none');
  const onClose = () => setIdentifier('none');

  return (
    <div className='section' id='prizes'>
      <h2 className='section-heading'>
        Prizes<span className='green'>.</span>
      </h2>
      <div className='section-wrapper' style={{ textAlign: 'center' }}>
        <p>Tap on the card to reveal the Prizes.</p>
      </div>
      <div className='prizes-column'>
        <div
          className='prizes-card first-prize'
          onClick={() => setIdentifier('first')}
        >
          <Cup />
          <p className='champion'>Champion</p>
        </div>
      </div>
      <div className='prizes-column'>
        <div
          className='prizes-card other-prizes'
          onClick={() => setIdentifier('second')}
        >
          <Cup />
          <div>
            1<sup>st</sup> Runner Up
          </div>
        </div>
        <div
          className='prizes-card other-prizes'
          onClick={() => setIdentifier('third')}
        >
          <Cup />
          <div>
            2<sup>nd</sup> Runner Up
          </div>
        </div>
      </div>
      <div className='prizes-column'>
        <div
          className='prizes-card other-prizes'
          onClick={() => setIdentifier('women')}
        >
          <Cup />
          <p>Best Performing Women Team</p>
        </div>
      </div>
      {identifier !== 'none' && (
        <PrizeModal
          identifier={identifier}
          onClose={() => setIdentifier('none')}
        />
      )}
    </div>
  );
};

export default Prizes;
