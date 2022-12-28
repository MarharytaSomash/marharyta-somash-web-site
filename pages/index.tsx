import About from '../components/About';
import Contact from '../components/Contact';
import styles from '../styles/HomePage.module.scss';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Currency from '../components/Currency';



export default function HomePage() {
  return (
    <div className={styles.wrapper}>

          <About />
          <Skills/>
          <Education />
          <Contact/>
          <Currency/>
    </div>
  )
}
