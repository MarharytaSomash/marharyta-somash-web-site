import '../styles/globals.scss';
import Head from 'next/head';
import style from '../styles/Sidebar_menu.module.scss';
import type { AppProps } from 'next/app';
import Sidebar_menu from '../components/Sidebar_menu'
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
