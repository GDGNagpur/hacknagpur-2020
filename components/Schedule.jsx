import React from 'react';

const Schedule = () => {
  React.useEffect(() => {
    loadVisme();
  }, []);

  const loadVisme = () => {
    const script = document.createElement('script');
    script.src = 'https://my.visme.co/visme-embed.js';
    script.async = true;
    document.body.appendChild(script);
  };

  return (
    <div id='schedule' className='section'>
      <h2 className='section-heading'>
        Schedule<span className='green'>.</span>
      </h2>
      <div className='section-wrapper'>
        <div
          className='visme_d'
          data-url='pv6x6my4-schedule'
          data-w='800'
          data-h='1034'
          data-domain='my'
        ></div>
      </div>
    </div>
  );
};

export default Schedule;
