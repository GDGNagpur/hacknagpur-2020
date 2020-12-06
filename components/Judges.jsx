import judges from '../data/judges';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io';

const Judges = () => {
  return (
    <div className='section' id='judges'>
      <h2 className='section-heading'>
        Judges<span className='green'>.</span>
      </h2>
      <div className='section-wrapper judges-content'>
        {judges.map(
          (
            { name, designation, company, linkedin, twitter, profile, track },
            i,
          ) => {
            return (
              <div key={i} className='judge-card'>
                <div className='judge-picture-wrapper'>
                  <img src={profile} width={150} height={150} />
                </div>
                <div className='judge-name'>{name}</div>
                <div className='judge-designation'>{designation}</div>
                <div className='judge-company green'>{company}</div>
                <div className='judge-social-links'>
                  {linkedin && (
                    <a href={linkedin} target='_blank'>
                      <IoLogoLinkedin />
                    </a>
                  )}
                  {twitter && (
                    <a href={twitter} target='_blank'>
                      <IoLogoTwitter />
                    </a>
                  )}
                </div>
                <div className='judge-track'>{track}</div>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Judges;
