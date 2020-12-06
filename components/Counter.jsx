import Countdown from 'react-countdown';

const Counter = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className='countdown'>
        <div className='time-chip'>
          <div className='time-chip-number'>{days}</div>
          <div className='time-chip-label'>Days</div>
        </div>
        :
        <div className='time-chip'>
          <div className='time-chip-number'>{hours}</div>
          <div className='time-chip-label'>Hours</div>
        </div>
        :
        <div className='time-chip'>
          <div className='time-chip-number'>{minutes}</div>
          <div className='time-chip-label'>Minutes</div>
        </div>
        :
        <div className='time-chip'>
          <div className='time-chip-number'>{seconds}</div>
          <div className='time-chip-label'>Seconds</div>
        </div>
      </div>
    );
  };

  return (
    <div className='counter'>
      <h4>Hackathon Starts in</h4>
      <Countdown
        date={new Date('December 26, 2020 11:00:00')}
        renderer={renderer}
      />
    </div>
  );
};

export default Counter;
