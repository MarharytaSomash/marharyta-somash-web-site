import styles from '../styles/About.module.scss';
import Link from 'next/link';
import { FC } from 'react';

const About:FC = () => {
   return (
        <div className={styles.about}>
               <h1 className={styles.about_title}>About myself</h1>
               <p className={styles.about_details}>
                  I’m a Front-End Developer located in Kyiv.
               </p>
               <p className={styles.about_details}>
                  I describe myself as a person people with strategic thinking, purposeful, who always develops.
                </p>
                
               <p className={styles.about_details}>
                  I do not have commercial experience in creating websites,
                  and  I successfully graduated  several IT Courses and continue to improve my English.
               </p>
               
              <p className={styles.about_details_link}>
                   <span>
                           <Link href={'https://t.me/MarharytaSomash'}>
                             Let’s make something special
                           </Link>
                 </span>
                
               </p>
         
                  
               
        </div>
      
   )
}

export default About;
