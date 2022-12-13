import styles from '../styles/Social.module.scss';
import LinkSvg from "../public/svg/linkedin";
import GitSvg from "../public/svg/github";
import TelegramSvg from "../public/svg/telegram";
import SocialItemWrapper from './SocialItemWrapper';


const Social= () => {
   return (
      <div className={styles.social}>
          <SocialItemWrapper  route={'https://www.linkedin.com/in/marharyta-somash-aa7010197/'}>
               <LinkSvg />
         </SocialItemWrapper>

         <SocialItemWrapper  route={'https://github.com/MarharytaSomash'}>
               <GitSvg />
         </SocialItemWrapper>

         <SocialItemWrapper   route={'https://t.me/MarharytaSomash'}>
             <TelegramSvg />
         </SocialItemWrapper> 
       
     </div>
         )         
}

export default Social;