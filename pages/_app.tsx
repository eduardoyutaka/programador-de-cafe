import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from 'components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Programador de Café</title>
        <meta
          name="description"
          content="Programming and gaming personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;
