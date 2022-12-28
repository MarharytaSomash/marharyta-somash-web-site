import { FC } from 'react';
import SoundSvg from '../public/svg/sound';
import styles from '../styles/Sound.module.scss';

const Sound:FC = () => {
   return (
      <div className={styles.sound}>
         <SoundSvg/>
          Sound
         {/* <a href=""></a> */}
     </div>
   )
   
}

export default Sound;