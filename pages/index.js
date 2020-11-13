import Head from 'next/head';
import SketchWrapper from '../components/Sketch';
import About from '../components/About';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import FAQs from '../components/FAQs';

export default function Home() {
  return (
    <>
      <SketchWrapper />
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
            <FAQs />
          </main>
        </div>
      </div>
    </>
  );
}
