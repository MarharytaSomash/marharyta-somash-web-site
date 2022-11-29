import styles from '../styles/About.module.scss'

const About = () => {
   return (
        <div className={styles.about}>
               <h1 className={styles.about_title}>About myself</h1>
               <p className={styles.about_details}>
                  I’m a Front-End Developer located in Kyiv.
                  I describe myself as a person people with strategic thinking, purposeful, who always develops.
                  I am open to opportunity.
                  I have do not have commercial experience in creating websites,
                  and  I successfully graduated  several IT Courses and continue to improve my English.
               </p>
        </div>
      
   )
}

export default About;