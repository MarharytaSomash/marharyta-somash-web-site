import '../styles/globals.scss';
import style from '../styles/Sidebar_menu.module.scss';
import type { AppProps } from 'next/app';
import Sidebar_menu from '../components/Sidebar_menu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <Component {...pageProps} />
     <Sidebar_menu />
    </>
   
  )
}
