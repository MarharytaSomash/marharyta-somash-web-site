import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar_menu.module.scss';



const navigation = [
  { id: 1, title: 'About me', path: '/about' },
  { id: 2, title: 'My Skills', path: '/skills' },
  { id: 3, title: 'Work', path: '/work' },
  { id: 4, title: 'Contact', path: '/contact' },
  { id: 5, title: 'Blog', path: '/blog' },
];


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