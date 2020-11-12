import Head from 'next/head';
import About from '../components/About';
import Hero from '../components/Hero';
import SketchWrapper from '../components/Sketch';

export default function Home() {
  return (
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
        </main>
      </div>
    </div>
  );
}
