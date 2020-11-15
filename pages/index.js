import Head from 'next/head';
import SketchWrapper from '../components/Sketch';
import About from '../components/About';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import FAQs from '../components/FAQs';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='main'>
          <Head>
            <meta charSet='UTF-8' />
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0'
            />
            <title>HackNagpur - Coming Soon</title>
          </Head>
          <main>
            <Hero />
            <About />
            <Tracks />
            <Prizes />
            <Sponsors />
            <FAQs />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
