import '../styles/globals.scss';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';

export default function App({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
 
      return (
      <>
          
          {loading ? <Loader/> :
           <Layout>
              <Head>
                     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
              </Head>
              <main>
                    <Component {...pageProps} />
              </main>
            </Layout>
          }

      </>
        
      )
}
