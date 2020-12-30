import Countdown from 'react-countdown';

const Counter = () => {
  const endsInRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <div></div>;
    } else {
      return (
        <div className='counter'>
          <h4>Hackathon ends in</h4>

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
        </div>
      );
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <Countdown
          date={new Date('December 31, 2020 01:30:00')}
          renderer={endsInRenderer}
        />
      );
    } else {
      return (
        <div className='counter'>
          <h4>Hackathon Starts in</h4>

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
        </div>
      );
    }
  };

  return (
    <Countdown
      date={new Date('December 26, 2020 11:00:00')}
      renderer={renderer}
    />
  );
};

export default Counter;
