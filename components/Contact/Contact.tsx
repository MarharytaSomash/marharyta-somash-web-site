import { FC,useState} from 'react';
import styles from '../../styles/Contact/Contact.module.scss';
import Form from './Form';
import Map from './Map';
import { useSpring, animated } from '@react-spring/web'


const Contact: FC = () => {

      const [state, toggle] = useState(true)
      const { x } = useSpring({
            from: { x: 0 },
            x: state ? 1 : 0,
            config: { duration: 1000 },
            })
   
   return (
     
      <div className={styles.contact}>
         <div className={styles.contact_details}>
             <span className={styles.topTags}></span> 
            <animated.h1
                      onMouseMove={() => toggle(!state)}
                     style={{ scale: x.to({
                     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                     output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                     })
                     }}
            >
              
               Contact me
           
            </animated.h1>
               <p > I am open to opportunity. </p>  
               <p> If you have  question, don't hesitate to use the form.</p> 
            <Form />
             <span className={styles.bottomTags}></span> 
         </div>    
         
                
         <Map />
        
         </div>
        
        
   )
   }

export default Contact;
      

      
