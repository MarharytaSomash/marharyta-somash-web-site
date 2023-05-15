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
                    I have almost 1 year of commercial experience working in a startup specializing
                    in cryptocurrency wallet development.
                </p>
                <p className={styles.about_details}>
                    Tecnology: Jira, Scrum, Git, Postman,React,Next JS, Redux, Typescript, SCSS.
                </p>
                <p className={styles.about_details}>
                    As a Junior Front End Developer, I am eager to further develop my expertise,
                    contribute to challenging projects, and collaborate with talented professionals.
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
