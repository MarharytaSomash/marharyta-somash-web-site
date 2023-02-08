import { FC } from 'react';
import SoundSvg from '../../public/svg/sound';
import styles from '../../styles/Sound.module.scss';
import useSound from 'use-sound';
// import audio from '../../public/audio.mp3'
// declare module '*.mp3' {
//   const content: string
//   export default content
// }
const Sound: FC = () => {
   
   // const [playSound] = useSound('../../public/audio.mp3')

//   onClick={() =>{playSound}}
   return (
      <div className={styles.sound}>
          <SoundSvg/>
          <span>Sound</span>
         <button className={styles.button}  > OFF </button> 
        
     </div> 

        
   )
   
}

export default Sound;


