import Link from 'next/link'
import { FC, useState } from 'react';
import ProgressBar from './ProgressBar'
import styles from '../styles/Skills.module.scss';
import { useSpring, animated } from '@react-spring/web';
import ScrollDown from './ScrollDown';

const Skills: FC = () => {
   const [state, toggle] = useState(true)
   const { x } = useSpring({
      from: { x: 0 },
      x: state ? 1 : 0,
      config: { duration: 1000 },
      })

   return (
      
      <div className={styles.skills}>
         <div className={styles.about_skills}>
              <span className={styles.topTags}></span> 
            <animated.h1 className={styles.skills_title}
                    onMouseMove={() => toggle(!state)}
                     style={{ scale: x.to({
                     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                     output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                     })
                     }}
            >
               Skills & Experience
            </animated.h1>
               <div className={styles.skills_describe}>
                     <div> In my previous job , i have worked for 2 years as a commodity market research analyst where I organised  of marketing research, analysis of the market and brands of competitors, preparation of sales reports and sales analysis, product sales planning.
                     This  experience  has made to improve my planning skills and organisation.</div>
                     <div>Also i worked as an economist for 2 years made various sales reports and product price analyses.
                     This experience helpS me become persistent and have strategic thinking with excellent knowledge Microsoft Office and 1C Entrepreneur.</div>
                     <div> Visit my profile <Link href={'https://www.linkedin.com/in/marharyta-somash-aa7010197/'}> <a target={'_blank'}></a> LinkedIn </Link>profile for more details or just <Link href={'/contact'}> <a target={'_blank'}></a>contact me.</Link> </div>
            </div>
       </div>
           <div className={styles.skills_experience}> 
                <div className={styles.skills_list}>
               
                        <p>React</p>
                        <ProgressBar done="98"  />
                        <p>Redux</p>
                        <ProgressBar done="70" />
                        <p>Next JS</p>
                        <ProgressBar done="98" />
                        <p>Node JS</p>
                        <ProgressBar done="80" />
                        <p>Typescript</p>
                        <ProgressBar done="90" />
                        <p>Git</p>
                        <ProgressBar done="100" />
                        
                  </div>
                    
                        <section className={styles.experience}>
                           <h2> Analyst in commodity market research </h2>
                           <h3>LLC "MD Eurotrade", Kyiv</h3>
                           <h4>11.2019 – 08.2021</h4>
                           <p>Organization of marketing research, analysis of the market and brands of competitors</p>
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
              <span className={styles.bottomTags}></span> 
    
      </div>  
     
   )
}

export default Skills;