import styles from '../styles/Sidebar_menu.module.scss';
import Image from "next/image";
import Navbar from './Navbar_menu';
import Link from 'next/link';

const Sidebar_menu = () => {
   return (
      <menu className={styles.main_menu}>
         <div className={styles.main_menu_top}>
               <div className={styles.logo}>
                  <Link href="#" title="letter m">
                     <Image src="/logo.png" width={60} height={60} alt="letter M" />
                     <span>Marharyta</span>
                  </Link>
                  <p>Front End Developer </p>
               </div>
         </div>
       
         <Navbar />

      </menu>

   )
}
export default Sidebar_menu