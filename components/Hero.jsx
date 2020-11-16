import DevfolioLogo from '../svgs/devfolio-logo';
import SessionalizeLogo from '../svgs/SessionalizeLogo';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='logo-big'>
        <span className='green'>hack</span>nagpur
        <span className='green'>.</span>
      </div>
      <div className='tagline'>
        Central India's largest community hackathon.
      </div>
      <div className='dates green'>26th December 2020 - 30th December 2020</div>
      <div className='main-buttons'>
        <a className='devfolio-button' href='https://hacknagpur.devfolio.co/'>
          <DevfolioLogo />
          Apply with Devfolio
        </a>
        <a
          href='http://sessionize.com/hacknagpur'
          className='call-for-speakers'
        >
          <SessionalizeLogo />
          Call for Speakers
        </a>
      </div>
    </div>
  );
};

export default Hero;
