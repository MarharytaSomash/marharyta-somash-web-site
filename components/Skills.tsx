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
                            In my previous job , i have worked for 2 years as a commodity market
                            research analyst where I organised of marketing research, analysis of
                            the market and brands of competitors, preparation of sales reports and
                            sales analysis, product sales planning. This experience has made to
                            improve my planning skills and organisation.
                        </div>
                        <div>
                            Also i worked as an economist for 2 years made various sales reports and
                            product price analyses. This experience helpS me become persistent and
                            have strategic thinking with excellent knowledge Microsoft Office and 1C
                            Entrepreneur.
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
                        <h2> Analyst in commodity market research </h2>
                        <h3>LLC "MD Eurotrade", Kyiv</h3>
                        <h4>11.2019 – 08.2021</h4>
                        <p>
                            Organization of marketing research, analysis of the market and brands of
                            competitors
                        </p>
                        <p>Preparation of sales reports and sales analysis;</p>
                    </section>
                    <section className={styles.experience}>
                        <h2> Economist of the planning and analytical department</h2>
                        <h3>PJSC "Tavria, House of vintage cognacs", Nova Khahovka</h3>
                        <h4>11.2017 - 07.2019</h4>
                        <p>Compilation and submission of statistical reports</p>
                        <p>Calculation of efficiency of export supply</p>
                        <p>Development of free selling and retail prices for products.</p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Skills;
