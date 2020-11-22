import { useEffect } from 'react';
import Head from 'next/head';
import SketchWrapper from '../components/Sketch';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Hero from '../components/Hero';
import Tracks from '../components/Tracks';
import FAQs from '../components/FAQs';
import Prizes from '../components/Prizes';
import Sponsors from '../components/Sponsors';
import Footer from '../components/Footer';
import Team from '../components/Team';
import { initGA, logPageView } from '../components/Analytics';

export default function Home() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

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
            <meta
              name='description'
              content="Central India's Largest Community Hackathon driven by 20+ local tech communites to empower innovative minds together to ideate, innovate and inspire developers."
            />
            <title>
              HackNagpur - Central India's largest community hackathon.
            </title>
          </Head>
          <main>
            <Navbar />
            <Hero />
            <About />
            <Tracks />
            <Prizes />
            <Sponsors />
            <FAQs />
            <Team />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
