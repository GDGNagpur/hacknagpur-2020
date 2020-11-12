import about from '../data/about';

const About = () => {
  return (
    <div id='about'>
      <h2 className='section-heading'>
        About<span className='green'>.</span>
      </h2>
      {about.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default About;
