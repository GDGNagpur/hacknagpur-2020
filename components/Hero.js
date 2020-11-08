import Image from 'next/image';

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
        <Image src='/assets/devfolio-logo.svg' height={24} width={22} />
        Apply with Devfolio
      </button>
    </div>
  );
};

export default Hero;
