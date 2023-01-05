import '../styles/globals.scss';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import {store } from '../store';
import { Provider } from 'react-redux';


export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
 
      return (
      <Provider store={store}>
         
          {loading ? <Loader/> :
           <Layout>
              <Head>
                     <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" />
              </Head>
              <main>
                    <Component {...pageProps} />
              </main>
            </Layout>
          }

      </Provider>
         
      )
}
