import AnimationTitle from "./shared/animationTitle";
import Link from "next/link";
import { FC } from "react";
import styles from "../styles/Education.module.scss";

const Education: FC = () => {
    return (
        <div>
            <section className={styles.about_education}>
                <AnimationTitle title="Education" />
                <h3 className={styles.education_title}>Ivan Franko National University of Lviv </h3>
                <p className={styles.education_details}>
                    09.2015 – 06.2017 - master's degree, Specialty : "Finance and Credit"
                </p>
            </section>
            <section className={styles.about_education}>
                <AnimationTitle title=" Additional education" />
                <h3 className={styles.education_title}>
                    2022 - 2023, Green Forest English course - Advanced level (C1):
                    <br></br>
                </h3>
                <div className={styles.education_details_link}>
                    <p className={styles.link}>
                        <Link
                            href={
                                "https://my.greenforest.com.ua/certificate/cf0706081c10c6aaa44d5e56cb5aa054c85bc673"
                            }
                        >
                            https://my.greenforest.com.ua/certificate/cf0706081c10c6aaa44d5e56cb5aa054c85bc673
                        </Link>
                    </p>
                </div>

                <h3 className={styles.education_title}>
                    2022, Front End Pro course at Hillel IT School:{" "}
                </h3>
                <div className={styles.education_details_link}>
                    <p className={styles.link}>
                        <Link href={"https://certificate.ithillel.ua/view/40371955"}>
                            https://certificate.ithillel.ua/view/40371955
                        </Link>
                    </p>
                </div>
                <h3 className={styles.education_title}>
                    2022, "Basics of Web UI Development 2022" at Lviv IT School:{" "}
                </h3>
                <div className={styles.education_details_link}>
                    <p className={styles.link}>
                        <Link
                            href={
                                "https://courses.prometheus.org.ua:18090/cert/d24db6542213405a9b5bbc8db70eb77d"
                            }
                        >
                            https://courses.prometheus.org.ua:18090/cert/d24db6542213405a9b5bbc8db70eb77d
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Education;
