import about from '../data/about';

const About = () => {
  return (
    <div id='about' className='section'>
      <h2 className='section-heading'>
        About<span className='green'>.</span>
      </h2>
      <div className='section-wrapper'>
        {about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default About;
