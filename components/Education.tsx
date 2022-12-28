import Link from 'next/link';
import { FC } from 'react';
import styles from '../styles/Education.module.scss'

const Education:FC = () => {
   return (
      <div>
      <section className={styles.about_education}>
               <h1>Education</h1>
               <h3 className={styles.education_title}> Ivan Franko National University of Lviv </h3>
               <p className={styles.education_details}>
                  09.2015 – 06.2017 - master's degree,
                  Specialty : "Finance and Credit" 
               </p>
      </section>
       <section className={styles.about_education}>
            <h2>Additional education:</h2>
               <h3 className={styles.education_title}> 2022-to present, Front End course at Ciclum </h3>
               <p className={styles.education_details_link}>
                 <span>
                     <Link href={'#'}>
                        there will be link
                     </Link>
               </span>
               </p>
               <h3 className={styles.education_title}> 2022, Front End Pro course at Hillel IT School: </h3>
               <p className={styles.education_details_link}>
                  <span>
                        <Link href={'https://certificate.ithillel.ua/view/40371955'}>
                           https://certificate.ithillel.ua/view/40371955 
                        </Link>
                  </span>
                 
               </p>
            <h3 className={styles.education_title}> 2022, "Basics of Web UI Development 2022" at
             Lviv IT School: </h3>
            <p className={styles.education_details_link}>
                  <span>
                           <Link href={'https://courses.prometheus.org.ua:18090/cert/d24db6542213405a9b5bbc8db70eb77d'}>
                           https://courses.prometheus.org.ua:18090/cert/d24db6542213405a9b5bbc8db70eb77d
                        </Link>
                  </span>
                 
            </p>
            <h3 className={styles.education_title}>
               2022 -to present, Green Forest English course - Upper-intermediate level.
            </h3> 
            <p className={styles.education_details_link}>
               <span>
                     <Link href={'#'}>
                        there will be link
                     </Link>
               </span>
                 
               </p>
         </section>
         
      </div>
   )
}

export default Education;