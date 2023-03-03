import styles from "../../styles/About/About.module.scss";
import Link from "next/link";
import { FC } from "react";
import Drag from "../Drag";
import AnimationTitle from "../shared/animationTitle";

const About: FC = () => {
    return (
        <>
            <Drag xy={{ x: 0, y: 0 }} />
            <div className={styles.about}>
                <span className={styles.topTags}></span>
                <AnimationTitle title="About myself" />
                <p className={styles.about_details}>I’m a Front-End Developer located in Kyiv.</p>
                <p className={styles.about_details}>
                    I have experience in creating websites using various technologies, including
                    React,Next JS, Redux, and TypeScript.
                </p>

                <p className={styles.about_details}>
                    Although my experience is non-commercial, i can still highlight any personal
                    projects or self-directed learning you have undertaken to showcase your skills
                    and expertise. I can also mention any specific challenges you faced and how you
                    overcame them, as well as any notable achievements or contributions i made to
                    your projects.
                </p>

                <p className={styles.about_details}>
                    Additionally, i can emphasize my eagerness to continue learning and growing as a
                    Junior Front End Developer, and my willingness to collaborate and contribute to
                    a team environment.
                </p>
                <div className={styles.about_details_link}>
                    <span>
                        <Link href={"https://t.me/MarharytaSomash"}>
                            Let’s make something special
                        </Link>
                    </span>
                </div>
                <span className={styles.bottomTags}></span>
            </div>
        </>
    );
};

export default About;
