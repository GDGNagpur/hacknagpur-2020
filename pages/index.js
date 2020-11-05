import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='container'>
      <Header />
      <div className='main'>
        <Head>
          <meta charset='UTF-8' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <title>HackNagpur - Coming Soon</title>
        </Head>
        <ComingSoon />
      </div>
    </div>
  );
}
