import About from '../components/about/About';
import Contact from '../components/Contact/Contact';
import styles from '../styles/HomePage.module.scss';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Currency from '../components/Currency';
import SphereAbout from '../components/about/SphereAbout';



export default function HomePage() {
  return (
    <div className={styles.wrapper}>

          <About />
          <SphereAbout/>
          <Skills/>
          <Education />
          <Contact/>
          <Currency/>
    </div>
  )
}
