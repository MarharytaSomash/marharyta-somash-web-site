import '../styles/globals.scss'
import Head from 'next/head';
import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
// import { store,wrapper } from '../redux/store';
import store from '../store';

function App({ Component, pageProps }):AppProps {
 
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
 
  
      return (
      
          <>
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
         </>
      )
}
// export default wrapper.withRedux(App)
 export default App