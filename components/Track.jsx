import ReadMoreReact from 'read-more-react';
import TrackSVG from '../svgs/tracks';

const Track = ({ track }) => {
  const { title, description } = track;

  return (
    <div className='track'>
      <div className='track-svg'>
        <TrackSVG title={title} />
      </div>
      <div className='track-content'>
        <h3>
          {title}
          <span className='green'>.</span>
        </h3>
        <ReadMoreReact
          text={description}
          min={80}
          ideal={100}
          max={200}
          readMoreText='read more'
        />
      </div>
    </div>
  );
};

export default Track;
