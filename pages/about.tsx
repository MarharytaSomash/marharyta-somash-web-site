import About from "../components/about/About";
import SphereAbout from "../components/about/SphereAbout";
import styles from "../styles/About/About.module.scss";

const about = () => {
    return (
        <div className={styles.aboutModule}>
            <About />
            <SphereAbout />
        </div>
    );
};

export default about;
