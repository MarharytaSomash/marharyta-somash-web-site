import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/MobileMenu.module.scss';
import { navigation } from './constants/default_data';
import Image from 'next/image';
import { FC } from 'react';


const MobileMenu:FC = () => {
      const { pathname } = useRouter();

      return (
      <div>
          
          <menu className={styles.some_menu} /> 
                  <div className={styles.some_menu_top} >
                        <div className={styles.logo}>
                              <Link href="/" title="letter m">
                                    <Image src={'/logo/logo.png'} alt={'profile letter'} width={60} height={60} />
                                    <p>Marharyta</p>
                              </Link>
                              <p>Front End Developer </p>
                        
                        </div>
                  </div>
                  <nav className={styles.some_menu_nav} >
                        <span>
                              {navigation.map(({ id, title, path }) => (       
                                    <Link key={id} href={ path }
                                    className={pathname === path ? styles.active : styles.default} > {title}
                                    </Link>
                              ))}
                        </span>
                  </nav>
                 
           <menu/>  
          
      </div>
    ) 
}

export default MobileMenu;