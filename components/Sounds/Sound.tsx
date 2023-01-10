import Link from 'next/link';
import { FC,useState } from 'react';
import SoundSvg from '../../public/svg/sound';
import styles from '../../styles/Sound.module.scss';
import useSound from 'use-sound';

const active = () => {
    const [play] = useSound('/audio.mp3');
    return play
 }

const Sound: FC= () => {
   //  const [play] = useSound('/audio.mp3');
   return (
      <div className={styles.sound}>
         <SoundSvg/>
          Sound
         <a className={styles.button}  href={'#'} onClick={active}  > OFF </a>
         {/* <button className={styles.button} onClick ={foo} > OFF</button> ; */}
  
     </div>
   )
   
}

export default Sound;



