import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar_menu.module.scss';
import { navigation } from './constants/default_data';
import Image from 'next/image';
import Social from './Social';


const Navbar = () => {
      const { pathname } = useRouter();

      return (
      <>
          <menu className={styles.main_menu}/>
                  <div className={styles.main_menu_top}>
                        <div className={styles.logo}>
                              <Link href="/" title="letter m">
                                    <Image src={'/logo/logo.png'} alt={'profile letter'} width={60} height={60} />
                                    <p>Marharyta</p>
                              </Link>
                              <p>Front End Developer </p>
                        
                        </div>
                  </div>
                  <nav className={styles.main_menu_nav}>
                        {navigation.map(({ id, title, path }) => (
                              <Link key={id} href={ path }
                              className={pathname === path ? styles.active : ''}> {title}
                              </Link>
                        ))}
                  </nav>
                  <Social/>
          <menu/>  
      </>
    ) 
}

export default Navbar;