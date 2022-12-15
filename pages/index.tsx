import About from '../components/About';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar_menu';
import styles from '../styles/HomePage.module.scss';
import Education from '../components/Education';
import Skills from '../components/Skills';



export default function HomePage() {
  return (
    <div className={styles.wrapper}>

          <About />
          <Skills/>
          <Education />
          <Contact/>
  
    </div>
  )
}
