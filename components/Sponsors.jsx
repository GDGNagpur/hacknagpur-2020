import Image from 'next/image';
import GoogleDevelopersLogo from '../svgs/google-developers-logo';
import DevfolioFullLogo from '../svgs/devfolio-full';
import PortisLogo from '../svgs/portis-logo';
import MaticLogo from '../svgs/matic-logo';
import TezosLogo from '../svgs/tezos-logo';
import AirmeetLogo from '../svgs/airmeet-logo';
import LinodeLogo from '../svgs/linode-logo';
import Click2CloudLogo from '../svgs/click2cloud-logo';
import GithubLogo from '../svgs/github-logo';
import ElasticLogo from '../svgs/elastic-logo';

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
          <p className='tier-heading'>Tree Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://elastic.co/'
              target='_blank'
              className='title-partner-card'
            >
              <ElasticLogo />
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
            <a
              href='https://github.com/'
              target='_blank'
              className='title-partner-card'
            >
              <GithubLogo />
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
            <a
              href='https://www.click2cloud.com/'
              target='_blank'
              className='title-partner-card'
            >
              <img
                height={64}
                src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/Click2Cloud%20logo%2002%20Copy%202.png?alt=media&token=8fb2ef1c-6265-446b-afdb-0df62613e229'
              />
            </a>
            <a
              href='https://www.echoar.xyz/'
              target='_blank'
              className='title-partner-card'
            >
              <img
                height={64}
                src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/echoAR%20-%20Logo%202020.png?alt=media&token=7ea71304-2341-4508-aaa5-8332814fe8ed'
              />
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
        <div className='tier'>
          <p className='tier-heading'>Internship Partner</p>
          <div className='sponsor-card-container'>
            <a
              href='https://www.mergeintern.com'
              target='_blank'
              className='title-partner-card'
            >
              <img src='https://firebasestorage.googleapis.com/v0/b/hacknagpur.appspot.com/o/Merge(3).png?alt=media&token=86837447-b3ab-4b87-873c-386f0334fa62' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
