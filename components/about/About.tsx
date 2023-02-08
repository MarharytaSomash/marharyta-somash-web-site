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
                  I describe myself as a person people with strategic thinking, purposeful, who always develops.
                </p>
                
               <p className={styles.about_details}>
                  I do not have commercial experience in creating websites,
                  and  I successfully graduated  several IT Courses and continue to improve my English.
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



