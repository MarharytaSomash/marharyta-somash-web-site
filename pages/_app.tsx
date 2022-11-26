import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Sidebar_menu from '../components/sidebar_menu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Component {...pageProps} />
     <Sidebar_menu />
    </>
   
  )
}
