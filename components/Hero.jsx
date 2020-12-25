import { Component } from 'react';
import Countdown from './Counter';
import DevfolioLogo from '../svgs/devfolio-logo';
import SlackLogo from '../svgs/slack-logo';
import SessionalizeLogo from '../svgs/SessionalizeLogo';

class Hero extends Component {
  componentDidMount = () => {
    window.onload = this.loadApplyNowScript();
  };

  loadApplyNowScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co';
    script.async = true;
    document.body.appendChild(script);

    script.onload = this.handleLoad;
  };

  handleLoad = () => {
    new Devfolio({
      key: 'hacknagpur',
      buttonSelector: '#devfolio-apply-now',
    });
  };

  render() {
    return (
      <div className='hero'>
        <a
          className='slack-button'
          href='https://join.slack.com/t/hacknagpur/shared_invite/zt-k5u5y8ib-Nvd6IBtvnjhv~MJOxLEO~w'
          target='_blank'
        >
          <div className='svg-container'>
            <SlackLogo />
          </div>
        </a>
        <div className='logo-big'>
          <span className='green'>hack</span>nagpur
          <span className='green'>.</span>
        </div>
        <div className='tagline'>
          Central India's largest community hackathon.
        </div>
        <div className='dates green'>
          26th December 2020 - 30th December 2020
        </div>
        <div className='main-buttons'>
          <button id='devfolio-apply-now'>
            <svg
              className='logo'
              xmlns='http://www.w3.org/2000/svg'
              fill='#fff'
              viewBox='0 0 115.46 123.46'
              style={{ height: '24px', width: '24px', marginRight: '8px' }}
            >
              <path d='M115.46 68a55.43 55.43 0 0 1-50.85 55.11S28.12 124 16 123a12.6 12.6 0 0 1-10.09-7.5 15.85 15.85 0 0 0 5.36 1.5c4 .34 10.72.51 20.13.51 13.82 0 28.84-.38 29-.38h.26a60.14 60.14 0 0 0 54.72-52.47c.05 1.05.08 2.18.08 3.34z' />
              <path d='M110.93 55.87A55.43 55.43 0 0 1 60.08 111s-36.48.92-48.58-.12C5 110.29.15 104.22 0 97.52l.2-83.84C.38 7 5.26.94 11.76.41c12.11-1 48.59.12 48.59.12a55.41 55.41 0 0 1 50.58 55.34z' />
            </svg>
            Apply with Devfolio
          </button>
          <a
            href='https://www.airmeet.com/e/4b3ee410-4621-11eb-a57f-05efedb5a06c'
            target='_blank'
            id='airmeet-button'
          >
            <svg
              width='38'
              height='38'
              viewBox='0 0 38 38'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.0738 8.50279C15.3832 4.31629 21.2652 4.31629 23.5746 8.50279C23.5746 8.50279 23.7906 8.85971 23.9028 9.10192C24.8617 11.1722 23.8935 12.5859 22.8689 14.8605C22.3452 16.0227 21.6224 17.102 20.8284 18.1957C20.6189 18.4842 20.4028 18.776 20.1842 19.071C19.5893 19.8741 18.9772 20.7001 18.4383 21.5453C16.9322 23.9073 15.8825 26.5861 16.7876 30.1555C17.23 31.8998 17.9814 33.1074 18.8112 33.9371H9.38476C4.76517 33.9371 1.8602 28.831 4.13435 24.7083L13.0738 8.50279Z'
                fill='white'
              />
              <path
                d='M30.0129 33.2682C29.2027 33.6931 28.2743 33.9375 27.2637 33.9375H22.3662C21.8715 33.9375 21.3703 33.8695 20.9397 33.6239C20.0397 33.1104 18.9193 32.0515 18.3476 29.7971C17.5765 26.7564 18.4338 24.4973 19.81 22.3389C20.3182 21.5422 20.8819 20.7811 21.4658 19.9931C21.691 19.6891 21.9193 19.3809 22.1486 19.0652C22.9572 17.9512 23.7549 16.7703 24.3436 15.4635C24.9256 14.1716 25.2524 12.9484 25.4143 11.8384L32.5139 24.7089C34.2195 27.8008 33.012 31.4459 30.3528 33.0753C30.2419 33.1432 30.1287 33.2076 30.0129 33.2682Z'
                fill='white'
              />
            </svg>
            <span>Join the Conference</span>
          </a>
        </div>
        <Countdown />
      </div>
    );
  }
}

export default Hero;
