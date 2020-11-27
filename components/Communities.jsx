import Image from 'next/image';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import team from '../data/team';
import communities from '../data/communities';

const Communities = () => {
  return (
    <div id='communities' className='section'>
      <h2 className='section-heading'>
        Communities<span className='green'>.</span>
      </h2>
      <div className='section-wrapper communities-content'>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href='https://gdg.community.dev/gdg-nagpur'
            className='community-card'
          >
            <img
              height={80}
              width='auto'
              src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/communities%2Fgdg-nagpur.svg?alt=media&token=b2a8f8bc-190b-46be-8bb4-5146cd372fb8'
            />
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {communities.map(({ link, redirect }) => {
            return (
              <a href={redirect} className='community-card'>
                <img src={link} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Communities;
