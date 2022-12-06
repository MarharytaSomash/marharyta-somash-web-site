import { social_data } from './constants/default_data';
import Link from 'next/link';
import styles from '../styles/Contacts.module.scss'

const Social= () => {
   return (
      <>
         {social_data.map((el) => {
         
            <Link href={el.link} className={styles.social}>
               <a target={'_blank'}>
                  {/* {el.icon}  */}
               </a>
            </Link>
         })}
      </>
          )         
}
export default Social;