import AnimationTitle from "./shared/animationTitle";
import Link from "next/link";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import ProgressBar from "./ProgressBar";
import { skills } from "./constants/default_data";
import styles from "../styles/Skills.module.scss";

const Skills: FC = () => {
    return (
        <>
            <div className={styles.skills}>
                <div className={styles.about_skills}>
                    <AnimationTitle title=" Skills & Experience " />

                    <div className={styles.skills_describe}>
                        <div>
                            <h1>StartUp"Crypto wallet"</h1>
                            <h2>Junior Front End Developer </h2>
                            <h3>Responsibility:</h3>
                            <ul>
                                <li>
                                    * Responsible for the development and maintenance of
                                    registration and authorization pages, as well as the creation of
                                    user pages within the framework of the Cryptowallet project
                                </li>
                                <li>
                                    * Adding new components and supporting existing ones in the
                                    crypto wallet.
                                </li>
                                <li>
                                    * Worked in a collaborative environment, communicating with
                                    other developers to achieve common project goals.{" "}
                                </li>
                                <li>
                                    * Active participation in the process of code review and
                                    development improvement, ensuring code cleanliness and adherence
                                    to best practices.
                                </li>
                            </ul>
                            <p>
                                Tecnology: Jira, Scrum, Git, Postman,React, Redux, Typescript, SCSS.
                            </p>
                        </div>

                        <div>
                            Visit my profile
                            <Link href={"https://www.linkedin.com/in/marharyta-somash-aa7010197/"}>
                                LinkedIn
                            </Link>
                            profile for more details or just
                            <Link href={"/contact"}>contact me.</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.skills_experience}>
                    <div className={styles.skills_list}>
                        {skills.map((skill) => (
                            <div key={uuidv4()}>
                                <p>{skill.name}</p>
                                <ProgressBar done={Number(skill.done)} />
                            </div>
                        ))}
                    </div>
                    <section className={styles.experience}>
                        <h2>Junior Front End Developer</h2>
                        <h3>StartUp"Crypto wallet"</h3>
                        <h4>2022 - 2023</h4>
                        <p>
                            Responsible for the development and maintenance of registration and
                            authorization pages.
                        </p>
                        <p>
                            Adding new components and supporting existing ones in the crypto wallet
                        </p>
                        <p>
                            Active participation in the process of code review and development
                            improvement, ensuring code cleanliness and adherence to best practices.
                        </p>
                    </section>
                    <section className={styles.experience}>
                        <h2> Analyst in commodity market research </h2>
                        <h3>LLC "MD Eurotrade", Kyiv</h3>
                        <h4>11.2019 – 08.2021</h4>
                        <p>
                            Organization of marketing research, analysis of the market and brands of
                            competitors
                        </p>
                        <p>Preparation of sales reports and sales analysis;</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Skills;
