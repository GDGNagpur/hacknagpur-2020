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
