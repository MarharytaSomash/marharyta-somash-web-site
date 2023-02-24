import styles from '../../styles/About/About.module.scss';
import Link from 'next/link';
import { FC,useState} from 'react';
import { useSpring, animated } from '@react-spring/web'
import Drag from '../Drag';


const About: FC = () => {
   const [state, toggle] = useState(true)
   const { x } = useSpring({
         from: { x: 0 },
         x: state ? 1 : 0,
         config: { duration: 1000 },
      })
   
   
   return (
      <>
        
            <Drag />
       <div className={styles.about}>
          <span className={styles.topTags}></span> 
               <animated.h1 className={styles.about_title} 
                           onMouseMove={() => toggle(!state)}
                           style={{ scale: x.to({
                           range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                           output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                           })
                           }}
               > 
                  About myself 
                  
                </animated.h1>
               <p className={styles.about_details}>
                  I’m a Front-End Developer located in Kyiv.
               </p>
               <p className={styles.about_details}>
                  I have experience in creating websites using various technologies, including React,Next JS, Redux, and TypeScript. 
                </p>
                
               <p className={styles.about_details}>
                  Although my experience is non-commercial, i can still highlight any personal projects or self-directed learning you have undertaken to showcase your skills and expertise. I can also mention any specific challenges you faced and how you overcame them, as well as any notable achievements or contributions i made to your projects. 
               </p>
               
               <p className={styles.about_details}>
                  Additionally, i can emphasize my eagerness to continue learning and growing as a Junior Front End Developer, and my willingness to collaborate and contribute to a team environment.
               </p>
              <div className={styles.about_details_link}>
                   <span>
                           <Link href={'https://t.me/MarharytaSomash'}>
                             Let’s make something special
                           </Link>
                 </span>
               </div>   
            <span className={styles.bottomTags}></span> 
           
         </div>
            
     </> 
   )
}

export default About;



