import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar_menu.module.scss';
import { navigation } from './constants/default_data';


const Navbar = () => {
   const { pathname } = useRouter();

   return (
      <nav className={styles.main_menu_nav}>
            {navigation.map(({ id, title, path }) => (
                  <Link key={id} href={ path }
                  className={pathname === path ? styles.active : ''}> {title}
                  </Link>
            ))}
      </nav>
    ) 
}

export default Navbar;