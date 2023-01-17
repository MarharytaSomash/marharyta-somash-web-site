import { FC } from 'react';
import SoundSvg from '../../public/svg/sound';
import styles from '../../styles/Sound.module.scss';
import useSound from 'use-sound';
import audio from '../../public/audio.mp3'


const Sound: FC = () => {
   // const [playSound] = useSound(audio)
   // const handleClick = () => {
   //  className={buttonActivated} 
   //     return  playSound()
   // }
  
   return (
      <div className={styles.sound}>
          <SoundSvg/>
          <span>Sound</span>
          <button className={styles.button} onClick={() => handleClick()} > OFF </button> ;
     </div> 
   )
   
}

export default Sound;


