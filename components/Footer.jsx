import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
} from 'react-icons/io';

const Footer = () => {
  return (
    <div className='section' id='footer'>
      <div className='logo-big'>
        <span className='green'>hack</span>nagpur
        <span className='green'>.</span>
      </div>
      <p className='address'>Nagpur, Maharashtra, IN</p>
      <a className='link-green' href='mailto:hacknagpur@gmail.com'>
        hacknagpur@gmail.com
      </a>
      <div className='social-links'>
        <a href='https://twitter.com/hacknagpur' target='_blank'>
          <IoLogoTwitter />
        </a>
        <a href='https://www.linkedin.com/company/hacknagpur/' target='_blank'>
          <IoLogoLinkedin />
        </a>
        <a href='https://www.instagram.com/hacknagpur/' target='_blank'>
          <IoLogoInstagram />
        </a>
        <a href='https://www.facebook.com/hacknagpur' target='_blank'>
          <IoLogoFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
