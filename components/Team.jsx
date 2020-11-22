import Image from 'next/image';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';
import team from '../data/team';

const Team = () => {
  return (
    <div id='team' className='section'>
      <h2 className='section-heading'>
        Team<span className='green'>.</span>
      </h2>
      <div className='section-wrapper team-content'>
        {team.map(({ name, designation, linkedin, twitter, link }, i) => {
          return (
            <div key={i} className='team-member-card'>
              <div className='team-member-picture-wrapper'>
                <img src={link} width={150} height={150} />
              </div>
              <p className='team-member-name green'>{name}</p>
              <p className='team-member-designation'>{designation}</p>
              <div className='team-member-social-links'>
                <a href={linkedin} href='_blank'>
                  <IoLogoLinkedin />
                </a>
                <a href={twitter} href='_blank'>
                  <IoLogoTwitter />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
