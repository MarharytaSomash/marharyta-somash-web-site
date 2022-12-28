import styles from '../styles/Loader.module.scss';
import Image from 'next/image';
import { FC } from 'react';

const Loader:FC = () => {
   return (
  
      <div className={styles.loader_logo}>
            <Image src={'/logo/logo.png'} alt={'profile letter'} width={60} height={60} />
            <div>Marharyta</div>
            <p> Marharyta is thinking</p>
                        
            <span className={styles.loader}></span>
      </div>
      
   )
}

export default Loader;