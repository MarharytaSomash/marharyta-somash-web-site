import { FC } from 'react';
import styles from '../styles/Contact.module.scss';
import Form from './Form';


const Contact:FC = () => {
   return (
      <div>
        <div className={styles.contact}>
               <h1> Contact me </h1>
               <p > I am open to opportunity. </p>  
               <p> If you have  question, don't hesitate to use the form.</p> 
               
         </div>
         <Form/>
         </div>
   )
   }

export default Contact;
      

      
