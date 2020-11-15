import Track from './Track';
import tracks from '../data/tracks';

const Tracks = () => {
  return (
    <div id='tracks' className='section'>
      <h2 className='section-heading'>
        Tracks<span className='green'>.</span>
      </h2>
      <div className='section-wrapper tracks-content'>
        {tracks.map((track) => (
          <Track track={track} />
        ))}
      </div>
    </div>
  );
};

export default Tracks;
