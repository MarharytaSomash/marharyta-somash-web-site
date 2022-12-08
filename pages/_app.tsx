import '../styles/globals.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
     <Layout>
       <Head>
         <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
      </Head>
     <main>
        <Component {...pageProps} />
    </main>
      </Layout>
   
  )
}
