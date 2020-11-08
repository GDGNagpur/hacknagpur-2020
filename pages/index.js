import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';
import Header from '../components/Header';

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
      </div>
    </div>
  );
}
