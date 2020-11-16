import GoogleDevelopersLogo from '../svgs/google-developers-logo';
import DevfolioFullLogo from '../svgs/devfolio-full';
import PortisLogo from '../svgs/portis-logo';
import MaticLogo from '../svgs/matic-logo';
import TezosLogo from '../svgs/tezos-logo';
import AirmeetLogo from '../svgs/airmeet-logo';

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
            <div className='title-partner-card'>
              <GoogleDevelopersLogo />
            </div>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Sapling Partner</p>
          <div className='sponsor-card-container'>
            <div className='title-partner-card'>
              <DevfolioFullLogo />
            </div>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Shoot Partner</p>
          <div className='sponsor-card-container'>
            <div className='title-partner-card'>
              <MaticLogo />
            </div>
            <div className='title-partner-card'>
              <PortisLogo />
            </div>
            <div className='title-partner-card'>
              <TezosLogo />
            </div>
          </div>
        </div>
        <div className='tier'>
          <p className='tier-heading'>Virtual Tech Partner</p>
          <div className='sponsor-card-container'>
            <div className='title-partner-card'>
              <AirmeetLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
