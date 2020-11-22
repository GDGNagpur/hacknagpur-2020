import Image from 'next/image';
import GoogleDevelopersLogo from '../svgs/google-developers-logo';
import DevfolioFullLogo from '../svgs/devfolio-full';
import PortisLogo from '../svgs/portis-logo';
import MaticLogo from '../svgs/matic-logo';
import TezosLogo from '../svgs/tezos-logo';
import AirmeetLogo from '../svgs/airmeet-logo';
import LinodeLogo from '../svgs/linode-logo';

const Sponsors = () => {
  return (
    <div className='section' id='sponsors'>
      <h2 className='section-heading'>
        Sponsors<span className='green'>.</span>
      </h2>
      <div style={{ textAlign: 'center' }}>
        <div className='tier'>
          <p className='tier-heading'>Title Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://developers.google.com/'
              target='_blank'
              className='title-partner-card'
            >
              <GoogleDevelopersLogo />
            </a>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Sapling Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://devfolio.co/'
              target='_blank'
              className='title-partner-card'
            >
              <DevfolioFullLogo />
            </a>
            <a
              href='https://codingblocks.com/'
              target='_blank'
              className='title-partner-card'
            >
              <img
                height={64}
                src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/Coding%20blocks%20w%20(1)%201.png?alt=media&token=14ae9fb9-7779-442b-81e6-7d50f606043c'
              />
            </a>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Shoot Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://matic.network'
              target='_blank'
              className='title-partner-card'
            >
              <MaticLogo />
            </a>
            <a
              href='https://portis.io'
              target='_blank'
              className='title-partner-card'
            >
              <PortisLogo />
            </a>
            <a
              href='https://tezos.com'
              target='_blank'
              className='title-partner-card'
            >
              <TezosLogo />
            </a>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Seed Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://www.linode.com/'
              target='_blank'
              className='title-partner-card'
            >
              <LinodeLogo />
            </a>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Media Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://thelivenagpur.com/'
              target='_blank'
              className='title-partner-card'
            >
              <img
                height={64}
                src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/the%20live%20nagpur.png?alt=media&token=e583ff09-c089-4086-9aa4-30cdd6408351'
              />
            </a>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Virtual Tech Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://airmeet.com'
              target='_blank'
              className='title-partner-card'
            >
              <AirmeetLogo />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
