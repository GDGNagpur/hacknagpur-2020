import Head from 'next/head';
import ComingSoon from '../components/ComingSoon';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>HackNagpur - Coming Soon</title>
      </Head>
      <ComingSoon />
    </div>
  );
}
