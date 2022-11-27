import styles from '../styles/Sidebar_menu.module.scss';
import Image from "next/image";

const Sidebar_menu = () => {
   return (
      <menu className={styles.main_menu}>
         <div className={styles.main_menu_top}>
               <div className={styles.logo}>
                  <a href="#" title="letter m">
                     <Image src="/logo.png" width={60} height={60} alt="letter M" />
                     <p>Marharyta</p>
                  </a>
                  <p>Front End Developer </p>
               </div>
         </div>
         <nav className={styles.main_menu_nav}>

         </nav>
      </menu>

   )
}
export default Sidebar_menu