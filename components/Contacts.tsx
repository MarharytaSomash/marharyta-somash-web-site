import { contacts_data } from '../components/constants/default_data';
import Link from 'next/link';
import styles from '../styles/Contacts.module.scss'

const Contacts = () => {
   return (
      <>
         {contacts_data.map((el) => {
         
            <Link href={el.link} className={styles.contacts}>
               <a target={'_blank'}>
                  {/* {el.icon}  */}
               </a>
            </Link>
         })}
      </>
          )
    
         
}
export default Contacts;