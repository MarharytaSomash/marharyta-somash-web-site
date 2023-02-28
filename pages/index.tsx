import About from "../components/about/About";
import Contact from "../components/Contact/Contact";
import styles from "../styles/HomePage.module.scss";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Currency from "../components/News";
import SphereAbout from "../components/about/SphereAbout";
import ScrollDown from "../components/ScrollDown";

export default function HomePage() {
    return (
        <>
            <link rel="icon" href="/favicon.ico" />
            <div className={styles.wrapper}>
                <About />
                <ScrollDown />
                <SphereAbout />
                <Skills />
                <Education />
                <Contact />
                <Currency />
            </div>
        </>
    );
}
