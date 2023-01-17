import Link from 'next/link';
import { FC, useState } from 'react';
import styles from '../styles/Education.module.scss';
import { useSpring, animated } from '@react-spring/web';


const Education: FC = () => {
   const [state, toggle] = useState(true)
   const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
      })

   return (
      <div>
      <section className={styles.about_education}>
            <animated.h1
                      onMouseMove={() => toggle(!state)}
                     style={{ scale: x.to({
                     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                     output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                     })
                     }}
            >
               Education
            </animated.h1>
               <h3 className={styles.education_title}> Ivan Franko National University of Lviv </h3>
               <p className={styles.education_details}>
                  09.2015 – 06.2017 - master's degree,
                  Specialty : "Finance and Credit" 
               </p>
      </section>
       <section className={styles.about_education}>
            <animated.h2 onMouseMove={() => toggle(!state)}
                     style={{ scale: x.to({
                     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                     output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                     })
                     }}
            >
               Additional education:
            </animated.h2>
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