import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { prizes } from '../data/prizes';

const PrizeModal = ({ identifier, onClose }) => {
  return (
    <Dialog
      style={{
        borderRadius: '16px',
        margin: '48px auto',
        width: '80%',
        height: '80%',
        overflowY: 'scroll',
        color: '#000000',
      }}
    >
      <div className='dialog'>
        <button className='dialog-close' onClick={onClose}>
          X
        </button>
        <div
          style={{
            display: 'flex',
            textAlign: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'baseline',
          }}
        >
          {prizes[identifier].map(({ name, image }) => (
            <div className='prize-card-item' key={name}>
              <img src={image} />
              <p style={{ color: '#000' }}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default PrizeModal;
