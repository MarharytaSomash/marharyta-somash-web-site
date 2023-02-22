import { useState, useRef } from 'react';
import styles from '../../styles/Sound.module.scss';
import SoundSvg from '../../public/svg/sound';

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio?.play();
      setIsPlaying(true);
    } else {
      audio?.pause();
      setIsPlaying(false);
    }
  };

  return (
      <div className={styles.sound}>  
          <SoundSvg/>
          <span>Sound</span>
          <audio ref={audioRef} src="/audio.mp3" />
          <button className={styles.button} onClick={handleClick}>
              {isPlaying ? 'OFF' : 'ON'}
          </button>
    </div>
  );
};

export default Sound
