import about from '../data/about';
import HackNagpurIllustration from '../svgs/hacknagpur';

const About = () => {
  return (
    <div id='about' className='section'>
      <h2 className='section-heading'>
        About<span className='green'>.</span>
      </h2>
      <div className='section-wrapper about-content'>
        <div className='svg-container'>
          <HackNagpurIllustration />
        </div>
        <div>
          {about.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
