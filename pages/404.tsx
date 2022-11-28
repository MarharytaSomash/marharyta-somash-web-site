import styles from '../styles/404.module.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Error = () => {
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
         router.push('/');
      }, 2000);
   }, [router]);

   return (
      <div className={styles.wrap}>
         <h1>404</h1>
         <p > Something is going wrong...</p>
      </div>
   )
   
}
export default Error;
