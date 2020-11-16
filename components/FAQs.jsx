import Collapsible from 'react-collapsible';
import faqs from '../data/faqs';

const FAQs = () => {
  return (
    <div id='faqs' className='section'>
      <h3 className='section-heading'>
        FAQs<span className='green'>.</span>
      </h3>
      <div className='section-wrapper'>
        {faqs.map(({ q, a }, i) => (
          <Collapsible trigger={q} transitionTime={200} key={i}>
            <p>{a}</p>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default FAQs;