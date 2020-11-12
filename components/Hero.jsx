import DevfolioLogo from '../svgs/devfolio-logo';

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
      <button className='devfolio-button'>
        <DevfolioLogo />
        Apply with Devfolio
      </button>
    </div>
  );
};

export default Hero;
